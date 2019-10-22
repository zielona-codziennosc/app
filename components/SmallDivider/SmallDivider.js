import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from 'color';

import Colors from '../../constants/Colors';

export default function SmallDivider(props) {
  const { style, text, button } = props;

  return (
    <View>
      <View style={({ ...style })}>
        <View style={styles.inner}>
          <Text style={styles.text}>{text}</Text>
          {button && button}
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: 40,
    backgroundColor: Colors.green,
    borderRadius: 1
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.blackGreenish,
    paddingBottom: 5
  }
});
