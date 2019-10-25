import { AsyncStorage } from 'react-native';

import Backend from "../constants/Backend";
import StorageConstants from '../constants/Storage';

export default async (navigation) => {
  const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);


  const logoutResult = await fetch(Backend.LOGOUT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  }).then(response => response.json());


  await AsyncStorage.clear();
 // await AsyncStorage.setItem(StorageConstants.APP_INITIALIZED, "true");

  navigation.navigate("Auth");
}

const buryLoginResultInStorage = async ({token, expiresIn, id}) => {
  await Promise.all([
    AsyncStorage.setItem("backend_jwt", String(token)),
    AsyncStorage.setItem("backend_jwt_exp", String(Date.now() + expiresIn * 1000)),
    AsyncStorage.setItem("userId", String(id))
  ]);
};
