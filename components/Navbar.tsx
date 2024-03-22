import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Tab } from '../app/index'

const tab1: Tab = {
  ref: 'home',
  title: 'Attention... on joue bientôt !',
  imageTitle: 'attention'
};
const tab2: Tab = {
  ref: 'hymnes',
  title: 'Hymnes',
  imageTitle: 'hymns'
};
const tab3: Tab = {
  ref: 'caucus',
  title: 'Caucus...',
  imageTitle: 'caucus'
};
const tab4: Tab = {
  ref: 'break',
  title: 'Entracte...',
  imageTitle: 'break'
};
const tab5: Tab = {
  ref: 'votes',
  title: 'A vos votes !',
  imageTitle: 'votes'
};

const tab6: Tab = {
  ref: 'penalty',
  title: 'Pénalité !',
  imageTitle: 'penalty'
};
const tab7: Tab = {
  ref: 'exclusion',
  title: 'Expulsion !',
  imageTitle: 'exclusion'
};

const tab8: Tab = {
  ref: 'fusillade',
  title: 'Fusillade !',
  imageTitle: 'fusillade'
};
const tab9: Tab = {
  ref: 'podium',
  title: 'Podium',
  imageTitle: 'podium'
};



const Navbar = ( setActiveTab: (tab: Tab | null) => void ) => {
  const tabs = [tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9];
  return (
  <View style={styles.navbar}>
    {tabs.map((tab, index) => (


        <TouchableOpacity
          style={styles.icon}
          onPress={() => setActiveTab(tab)}
          onMouseEnter={() => Platform.OS === 'web' && setActiveTab(tab)}
        >
          <Text>{tab.title}</Text>
        </TouchableOpacity>
    ))}
      </View>
    );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    padding: 10,
  },
});

export default Navbar;
