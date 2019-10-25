import React, {useState, useEffect} from 'react';
import { StyleSheet, View , TextInput, Text, Picker } from 'react-native';
import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import submit from "../backendCommunication/dailyActivity"

export default function HomeScreen(props) {

  const [commute, setCommute] = useState("eco");
  const [plastic, setPlastic] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <View style={styles.container}>

      <Text>Do pracy dotarłem dziś...</Text>
      <Picker
        selectedValue={commute}
        style={{height: 50, width: 100}}
        onValueChange={setCommute}>
        <Picker.Item label="Własnonożnie" value="eco" />
        <Picker.Item label="Komunikacją publiczną" value="public" />
        <Picker.Item label="Samochodem" value="car" />
      </Picker>

      <Text>Zużycie plastiku w gramach</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setPlastic}
        value={plastic}
        keyboardType={'numeric'}
      />

      <Text>Zużycie wody w litrach</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setWater}
        value={water}
        keyboardType={'numeric'}
      />

      <Button
        size={ButtonSizes.big}
        color={ButtonColors.transparentGrey}
        text={"Wyślij"}
        action={() => submit({commute, plastic: plastic*0.001, water}, props.navigation.navigate)}
      />

      <Text>Ekran prototypowy</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  marginBottom: {
    marginBottom: 20
  }
});
