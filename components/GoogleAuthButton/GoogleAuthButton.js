import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text
} from 'react-native';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Layout from '../../constants/Layout';

export default function GoogleAuthButton(props) {
  const { type } = props;

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
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
