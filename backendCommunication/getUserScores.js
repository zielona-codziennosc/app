import { AsyncStorage } from 'react-native';
import StorageConstants from "../constants/Storage";

export default async () => {
  const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
  const userId = await AsyncStorage.getItem(StorageConstants.USER_ID);

  const response = await fetch("https://trace.papiewski.tk/user/"+userId, {
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(result => result.json());

  return response
}
