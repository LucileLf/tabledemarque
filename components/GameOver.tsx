import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import logoPath from '../assets/images/logo.png';
// import * as SecureStore from 'expo-secure-store';

import Colors from '@/constants/Colors';


const GameOver = ({ winningTeam }) => {
  return (
    <View style={styles.mainContainer}>

{/* LOGO */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={logoPath}
          resizeMode="contain"
        />
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text> */}
      </View>

{/* TITLE */}
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
            {title}
        </Text> */}
        {/* <TextInput style={styles.title} placeholder={"Titre de l'impro"} onFocus={setTitle("")} onChangeText={setTitle} value={title} numberOfLines={1}/> */}
        <Text
      style={styles.title}
      numberOfLines={1}>
        C'est fini !
      </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    backgroundColor: Colors.blue,
    height: '100vh',
    justifyContent: "space-evenly",
    paddingBottom: '10%',
    paddingTop: '10%',
  },
  logoContainer: {
    //paddingTop: 5,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    border: '1px solid Yellow',
    //objectFit: 'contain',
    // zIndex: 1000,
  },
  logo: {
    maxHeight: '100%',
    //width: '100%',
  },
  titleContainer: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    border: '1px solid green'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 100,
    fontFamily: 'Cochin',
    textAlign: 'center'
  }
})

export default GameOver
