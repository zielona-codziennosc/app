import * as Google from 'expo-google-app-auth';
import { AsyncStorage } from 'react-native';

export default async () => {
  const googleResponse = await Google.logInAsync({
    androidStandaloneAppClientId: "1057953753265-je2pta6uev2paoojtf7h5use62l97ubh.apps.googleusercontent.com",
    androidClientId: "1057953753265-je2pta6uev2paoojtf7h5use62l97ubh.apps.googleusercontent.com",
  });


  const loginResult = await fetch("https://trace.papiewski.tk/user/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ googleIdToken: googleResponse.idToken })
  }).then(response => response.json());

  await buryLoginResultInStorage(loginResult);
}

const buryLoginResultInStorage = async ({token, expiresIn, id}) => {
  await Promise.all([
    AsyncStorage.setItem("backend_jwt", String(token)),
    AsyncStorage.setItem("backend_jwt_exp", String(Date.now() + expiresIn * 1000)),
    AsyncStorage.setItem("userId", String(id))
  ]);
};
