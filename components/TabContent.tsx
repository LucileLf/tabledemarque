import React from 'react';
import { StyleSheet, Image, TextInput, Text, View } from 'react-native';
import { Tab } from '../app/index'

import Colors from '@/constants/Colors';


export default function TabContent(activeTab: Tab) {
  const logoStyle = [
    styles.logo,
    (activeTab.title === 'Entracte...') ? styles.rotatedLogo : null,
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.zzzContainer}>
        {/* <Text style={styles.zzz}>
          Zzz...
        </Text> */}
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={logoStyle}
          source={`../assets/images/${activeTab.imageTitle}.webp`}
        />
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text> */}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
            {activeTab.title}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    backgroundColor: Colors.blue,
    height: '100%'
  },
  logoContainer: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue
  },
  logo: {
    width: 300,
    height: 300,
  },
  rotatedLogo: {
    transform: [{ rotate: '28deg' }],
  },
  titleContainer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue
  },
  zzzContainer: {
    padding: 10,
    backgroundColor: Colors.blue
  },
  zzz: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '50%',
    backgroundColor: Colors.blue
  },
  score: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  scoreText: {
    color: Colors.blue,
    fontSize: 44,
    fontWeight: 'bold',
  },
});
