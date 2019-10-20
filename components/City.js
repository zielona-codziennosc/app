import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CityHeader from './CityHeader';
import CityBody from './CityBody';
import Colors from '../constants/Colors';

export default class City extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CityHeader style={styles.bottomMargin} />
        <CityBody />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    backgroundColor: Colors.whiteGreenish,
    borderRadius: 20
  },
  bottomMargin: {
    marginBottom: 10
  }
});
