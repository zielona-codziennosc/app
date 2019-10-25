import React from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';

import TextInput from '../components/TextInput';
import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import GoogleAuthButton from '../components/GoogleAuthButton';
import Divider from '../components/Divider';

export default function LoginScreen(props) {
  const { navigation } = props;

  const onSignUpButtonClick = () => {
    navigation.navigate('SignUp');
  };

  const __TEMPORARY__onLoginButtonClick = () => {
    ToastAndroid.showWithGravity(
      'W prototypie aplikacji jako metoda logowania dostępne jest tylko logowanie z Googlem. Przepraszamy za utrudnienia.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.elementMargin} placeholder="E-mail" />
        <TextInput style={styles.elementMargin} placeholder="Hasło" />
      </View>
      <View style={({ ...styles.actions, ...styles.elementMargin })}>
        <Button
          text="Rejestracja"
          size={ButtonSizes.big}
          color={ButtonColors.transparentGrey}
          action={onSignUpButtonClick}
        />
        <Button
          text="Zaloguj"
          size={ButtonSizes.big}
          color={ButtonColors.green}
          action={__TEMPORARY__onLoginButtonClick}
        />
      </View>
      <Divider style={styles.elementMargin} text="lub" />
      <GoogleAuthButton type="login" navigate={navigation.navigate} />
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
