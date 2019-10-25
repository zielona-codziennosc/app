import { AsyncStorage } from 'react-native';
import StorageConstants from '../constants/Storage';
import Backend from '../constants/Backend';

export default async () => {
  const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
  const userId = await AsyncStorage.getItem(StorageConstants.USER_ID);

  return await fetch(Backend.USER_OF_ID(userId).ROOT, {
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(result => result.json())
}
