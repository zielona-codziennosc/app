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
    const userToken = await AsyncStorage.getItem(StorageConstants.USER_TOKEN);
    const appInitialized = await AsyncStorage.getItem(StorageConstants.APP_INITIALIZED);

    navigation.navigate(userToken ? [appInitialized ? 'Initialize' : 'App'] : 'Auth');
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
