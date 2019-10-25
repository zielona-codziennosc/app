import { AsyncStorage } from 'react-native';
import StorageConstants from '../constants/Storage';
import Backend from '../constants/Backend';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default async () => {
  const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
  const userId = await AsyncStorage.getItem(StorageConstants.USER_ID);


  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let location = await Location.getCurrentPositionAsync({});

  const bodyobj  = JSON.stringify({coordinates: `${location.coords.latitude}, ${location.coords.longitude}`});

  console.log(bodyobj);

  const result = await fetch(Backend.USER_OF_ID(userId).COORDINATES, {
    method: "POST",
    body: bodyobj,
    headers: {
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(result => result.json());

  console.log(result);
}
