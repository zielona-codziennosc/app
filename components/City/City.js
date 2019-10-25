import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CityHeader from './CityHeader';
import CityBody from './CityBody';
import Colors from '../../constants/Colors';

export default function City(props) {
  const { style } = props;

  return (
    <View style={({ ...styles.container, ...style })}>
      <CityHeader style={styles.bottomMargin} savings={props.userScores.totalSavings}/>
    </View>
  );
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
