import React from 'react';
import { View, Text } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

export default function BetterThanAxis(props) {
  const { type, value, style } = props;

  const filledAxisStyle = {
    color: type.colors.backgroundAndText,
    backgroundColor: type.colors.main,
    width: String(Math.floor(value))+"%"
  };

  const axisBackgroundStyle = {
    backgroundColor: type.colors.backgroundAndText
  };

  return (
    <View style={({ ...styles.container, ...style })}>
      <View style={styles.axis}>
        <View style={[styles.filled, filledAxisStyle]}>
          <Text style={[styles.filledValue, filledAxisStyle]}>{`${Math.floor(value)}%`}</Text>
        </View>
        <View style={[styles.full, axisBackgroundStyle]} />
      </View>
      <Text style={styles.title}>{`${Math.floor(value)}%`} {type.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  axis: {
    position: 'relative',
    width: '50%',
    borderRadius: 20,
    overflow: 'hidden',
    height: 40
  },
  filled: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    zIndex: 10
  },
  filledValue: {
    fontSize: 18,
    fontWeight: '600'
  },
  full: {
    position: 'absolute',
    width: '100%',
    height: 40,
    zIndex: 1
  },
  title: {
    color: Colors.greyGreenish,
    fontWeight: '600',
    fontSize: 18,
    width: '50%',
    marginLeft: 10
  }
});
