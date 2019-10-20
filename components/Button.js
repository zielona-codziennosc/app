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
    action,
    style
  } = props;

  return (
    <View style={({ ...styles.container, ...style })}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => action()}
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

export const ButtonColors = {
  white: {
    color: Color(Colors.green).alpha(0.75),
    backgroundColor: Colors.white
  },
  greyGreenish: {
    color: Colors.blackGreenish,
    backgroundColor: Color(Colors.green).alpha(0.125),
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
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  big: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fullSmall: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
  },
  circleSmall: {
    height: 47,
    width: 47,
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
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 18
  }
});
