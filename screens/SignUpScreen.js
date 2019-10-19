import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Divider from '../components/Divider';
import TextInput from '../components/TextInput';
import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import GoogleAuthButton from '../components/GoogleAuthButton';
import SingleCheckboxInput from '../components/SingleCheckboxInput';

export default function SignInScreen(props) {
  const { navigation } = props;

  const onRulesButtonClick = () => {
    navigation.navigate('Rules');
  };

  const onLoginButtonClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.elementMargin} placeholder="Imię" />
        <TextInput style={styles.elementMargin} placeholder="E-mail" />
        <TextInput style={styles.elementMargin} placeholder="Hasło" />
      </View>
      <View style={({ ...styles.actions, ...styles.elementMargin})}>
        <Button
          text="Logowanie"
          size={ButtonSizes.big}
          color={ButtonColors.transparentGrey}
          onPress={() => onLoginButtonClick()}
        />
        <Button
          text="Zarejestruj"
          size={ButtonSizes.big}
          color={ButtonColors.green}
        />
      </View>
      <SingleCheckboxInput
        text={(
          <Text onPress={() => onRulesButtonClick()}>
            Akceptuję regulamin serwisu
          </Text>
        )}
        style={styles.elementMargin}
      />
      <Divider style={styles.elementMargin} text="lub" />
      <GoogleAuthButton type="signup" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  elementMargin: {
    marginBottom: 20,
  }
});
