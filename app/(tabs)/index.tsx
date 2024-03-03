import { StyleSheet } from 'react-native';
import Home from '@/components/Home';
import { useState } from 'react';
import React from 'react';


export default function TabOneScreen() {
  const [title, setTitle] = useState("");
  const [scores, setScores] = useState([0, 0]);
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
    <Home title={title} setTitle={setTitle} scores={scores} setScores={setScores}></Home>
    // <Scores title={title} setTitle={setTitle} scores={scores}></Scores>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
