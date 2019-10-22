import React from 'react';
import { View, Text } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import SmallDivider from '../SmallDivider';
import Colors from '../../constants/Colors';
import BetterThanAxis from './BetterThanAxis';
import { Axes } from './BetterThanConstants';


export default function BetterThan(props) {
  const { style } = props;

  return (
    <View style={({ ...styles.container, ...style })}>
      <SmallDivider style={styles.bigMarginBottom} text="Twój styl życia jest lepszy od" />
      <BetterThanAxis style={styles.marginBottom} type={Axes.Poles} value="51%" />
      <BetterThanAxis style={styles.marginBottom} type={Axes.Europeans} value="44%" />
      <BetterThanAxis style={styles.marginBottom} type={Axes.Neighbors} value="76%" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  bigMarginBottom: {
    marginBottom: 20
  },
  marginBottom: {
    marginBottom: 10
  }
});
