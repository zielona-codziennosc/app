import * as Google from 'expo-google-app-auth';
import { AsyncStorage } from 'react-native';

import Backend from "../constants/Backend";
import {clientId} from "../constants/Google";

export default async () => {
  const googleResponse = await Google.logInAsync({
    androidStandaloneAppClientId: clientId,
    androidClientId: clientId
  });

  const loginResult = await fetch(Backend.LOGIN, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ googleIdToken: googleResponse.idToken })
  }).then(response => response.json());


  await buryLoginResultInStorage(loginResult);
}

const buryLoginResultInStorage = async ({token, expiresIn, id, name}) => {
  await Promise.all([
    AsyncStorage.setItem("backend_jwt", String(token)),
    AsyncStorage.setItem("backend_jwt_exp", String(Date.now() + expiresIn * 1000)),
    AsyncStorage.setItem("userId", String(id)),
    AsyncStorage.setItem("userName", String(name))
  ]);
};
