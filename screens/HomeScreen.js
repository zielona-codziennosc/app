import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import City from '../components/City';
import BetterThan from '../components/BetterThan';
import getUserScores from '../backendCommunication/getUserScores';

export default function HomeScreen() {

  const [userScores, setScores] = useState({
    totalSavings: {carbon: 0, water: 0, plastic: 0},
    lifestyleBetterThan: {poles: 50, europeans: 50, neighbours: 50}
  });

  useEffect(() => {
    const fetchData = async () => {
      const userScores = await getUserScores();
      setScores(userScores);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <City style={styles.marginBottom} userScores={userScores} />
      <BetterThan userScores={userScores} />
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
