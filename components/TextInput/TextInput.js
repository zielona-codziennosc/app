import React from 'react';
import { TextInput as Input, StyleSheet } from 'react-native';
import Color from 'color';

import Colors from '../../constants/Colors';

export default function TextInput(props) {
  const { placeholder, style } = props;
  const [value, onChangeText] = React.useState('');

  return (
    <Input
      style={({ ...style, ...styles.container })}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.blackGreenish,
    backgroundColor: Color(Colors.whiteGreenish).alpha(0.5)
  }
});
