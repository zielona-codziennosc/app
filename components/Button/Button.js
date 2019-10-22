import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Button(props) {
  const {
    text,
    size,
    color,
    action,
    style,
    disabled
  } = props;

  const disabledStyle = {
    opacity: 0.75
  };

  return (
    <View style={({ ...styles.container, ...style, ...disabled && disabledStyle })}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => (!disabled ? action() : null)}
      >
        <View style={({ ...styles.inner, ...size, ...color })}>
          <Text style={({
            ...styles.text,
            color: color.color
          })}
          >
            {text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 18
  }
});
