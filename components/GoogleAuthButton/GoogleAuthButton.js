import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text, AsyncStorage
} from 'react-native';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Layout from '../../constants/Layout';
import login from "../../backendCommunication/login";
import StorageConstants from '../../constants/Storage';

export default function GoogleAuthButton({type, navigate}) {

  const loginHook = async () => {
    await login();

    const appInitialized = await AsyncStorage.getItem(StorageConstants.APP_INITIALIZED);
    navigate(appInitialized ? "Home" : "Initialize");
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={loginHook}>
        <View style={styles.inner}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faGoogle}
              size={20}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>
            {type === 'login' && 'Zaloguj z Google'}
            {type === 'signup' && 'Zarejestruj z Google'}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%'
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: '#2D9CDB'
  },
  text: {
    backgroundColor: '#2D9CDB',
    color: '#f2f2f2',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    padding: 15,
    width: Layout.window.width - 2 * 20 - 2 * 15
  },
});
