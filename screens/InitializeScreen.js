import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';

import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import handleCoordinates from "../backendCommunication/coordinates";

import StorageConstants from '../constants/Storage';

export default function InitializeScreen(props) {

  const [partIndex, setPartIndex] = React.useState(0);
  const activePart = parts[partIndex];
  const isLastPart = partIndex + 1 === parts.length;
  const hasContent = activePart.content !== undefined;


  handleCoordinates();

  const endInitialization = async () => {
    await AsyncStorage.setItem(StorageConstants.APP_INITIALIZED, "true");
    props.navigation.navigate("Home");
  };

  const nextPartButton = () => (
    <Button
      text="Dalej"
      color={ButtonColors.white}
      size={ButtonSizes.big}
      action={() => setPartIndex(partIndex + 1)}
    />
  );

  const lastPartButton = () => (
    <Button
      text="Zaczynamy!"
      color={ButtonColors.white}
      size={ButtonSizes.big}
      action={endInitialization}
    />
  );

  return (
    <View style={styles.container}>
      <Text
        style={({
          ...styles.title,
          ...isLastPart && styles.lastTitle
        })}
      >
        {activePart.title}
      </Text>
      {hasContent && <View style={styles.content}>{activePart.content}</View>}
      <View
        style={({
          ...styles.buttonContainer,
          ...isLastPart && styles.lastButtonContainer
        })}
      >
        {!isLastPart && nextPartButton()}
        {isLastPart && lastPartButton()}
      </View>
    </View>
  );
}

const parts = [
  {
    title: 'Cześć!',
    content: (
      <Text
        style={{
          fontSize: 24,
          color: Colors.whiteGreenish
        }}
      >
        Ogromnie cieszymy się, że chcesz rozwiązywać globalne
        problemy z naszą pomocą. Stań się z nami bohaterem działającym dla dobra planety!
      </Text>
    )
  },
  {
    title: 'Działaj i otrzymuj punkty',
    content: null
  },
  {
    title: 'Podsumuj dzień',
    content: null
  },
  {
    title: 'Utrzymuj świat w czystości',
    content: null
  },
  {
    title: 'Super! Już wszystko wiesz'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.green
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: Colors.whiteGreenish
  },
  lastTitle: {
    textAlign: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxHeight: Layout.window.height / 4,
    marginVertical: 20
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  lastButtonContainer: {
    justifyContent: 'center',
    marginTop: Layout.window.height / 8,
  }
});
