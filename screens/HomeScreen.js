import React from 'react';
import { StyleSheet, View } from 'react-native';

import City from '../components/City';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
