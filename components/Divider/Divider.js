import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from 'color';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

export default function Divider(props) {
  const { style, text } = props;

  return (
    <View>
      {text && (
        <View style={({ ...styles.divider, ...style })}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>lub</Text>
          <View style={styles.dividerLine} />
        </View>
      )}
      {!text && (
        <View style={({ ...styles.divider, ...style })}>
          <View style={({ ...styles.dividerLine, ...styles.dividerLineFullWidth })} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  dividerLine: {
    height: 2,
    borderRadius: 1,
    width: (Layout.window.width / 2) - 50,
    backgroundColor: Color(Colors.blackGreenish).alpha(0.5).toString()
  },
  dividerLineFullWidth: {
    width: '100%'
  },
  dividerText: {
    fontSize: 18,
    fontWeight: '600',
    color: Color(Colors.blackGreenish).alpha(0.5).toString(),
    backgroundColor: Color.white,
    paddingHorizontal: 5
  }
});
