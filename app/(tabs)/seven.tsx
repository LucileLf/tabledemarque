import { StyleSheet } from 'react-native';

import Screen from '@/components/Screen';
import React from 'react';

export default function TabSevenScreen() {
  return (
    // <Penalty/>
    <Screen title='Pénalité !' imagePath='../assets/images/penalty.webp' />
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab Two</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/two.tsx" />
    // </View>
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
