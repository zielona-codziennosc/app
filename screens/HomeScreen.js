import React from 'react';
import { StyleSheet, View } from 'react-native';

import City from '../components/City';
import BetterThan from '../components/BetterThan';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <City style={styles.marginBottom} />
      <BetterThan />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  marginBottom: {
    marginBottom: 20
  }
});
