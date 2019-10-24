import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

import StorageConstants from '../constants/Storage';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;
    const appInitialized = await AsyncStorage.getItem(StorageConstants.APP_INITIALIZED);

    const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
    const tokenExp = await AsyncStorage.getItem(StorageConstants.USER_TOKEN_EXPIRATION);

    const userTokenValid = (userToken && tokenExp && Number(tokenExp) > Date.now() + 1000 * 60 * 10);

    navigation.navigate(userTokenValid ? (appInitialized ? 'App' : 'Initialize') : 'Auth');
  };

  render() {

    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
