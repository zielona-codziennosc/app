import { AsyncStorage } from 'react-native';
import StorageConstants from '../constants/Storage';
import Backend from '../constants/Backend';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default async (activity, navigate) => {
  const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
  const userId = await AsyncStorage.getItem(StorageConstants.USER_ID);


  const result = await fetch(Backend.USER_OF_ID(userId).COORDINATES, {
    method: "POST",
    body: JSON.stringify(activity),
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(result => result.json());

  navigate("Home");
}
