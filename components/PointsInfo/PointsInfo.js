import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Colors from '../../constants/Colors';

export default function PointsInfo(props) {
  const {
    value,
    type,
    size,
    style
  } = props;

  return (
    <View
      style={({
        backgroundColor: type.backgroundColor,
        ...styles.container,
        ...size,
        ...style
      })}
    >
      <Text style={styles.value}>{value}</Text>
      <FontAwesomeIcon
        icon={type.icon}
        size={20}
        style={styles.icon}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20
  },
  value: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600'
  },
  icon: {
    marginLeft: 10,
    color: Colors.white
  }
});
