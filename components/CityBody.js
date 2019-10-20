import React from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function CityBody() {
  return (
    <View>
      <SvgUri
        width="200"
        height="200"
        source={require('../assets/vectors/city.svg')}
      />
    </View>
  );
}
