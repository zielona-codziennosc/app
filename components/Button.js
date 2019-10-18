import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../constants/Colors';

export default function Button(props) {
  const {
    text,
    action,
    size,
    color
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
    color: Colors.green,
    backgroundColor: Colors.white
  }
};

export const ButtonSizes = {
  small: {
    padding: 10,
    fontSize: 18
  },
  big: {
    padding: 20,
    fontSize: 18
  },
  fullSmall: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    fontSize: 15,
  }
};

const styles = EStyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    height: '100%',
    width: 'auto',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
  }
});
