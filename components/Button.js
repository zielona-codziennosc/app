import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';
import Colors from '../constants/Colors';

export default function Button(props) {
  const {
    text,
    size,
    color,
    action
  } = props;

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => action()}
      >
        <View style={({ ...styles.inner, ...size, ...color })}>
          <Text style={({
            ...styles.text,
            color: color.color,
            fontSize: size.fontSize
          })}
          >
            {text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export const ButtonColors = {
  white: {
    color: Color(Colors.green).alpha(0.75),
    backgroundColor: Colors.white
  },
  transparentGrey: {
    color: Color(Colors.blackGreenish).alpha(0.5),
    backgroundColor: 'transparent'
  },
  green: {
    color: Colors.white,
    backgroundColor: Colors.green
  }
};

export const ButtonSizes = {
  small: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18
  },
  big: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18
  },
  fullSmall: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    fontSize: 18,
  }
};

const styles = EStyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  }
});
