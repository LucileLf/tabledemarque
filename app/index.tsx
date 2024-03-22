import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { AppRegistry, Platform } from 'react-native';
//import { name as appName } from '../app.json';
import Navbar from '../components/Navbar'
import TabContent from '../components/TabContent'
import Home from '../components/Home'

export interface Tab {
  ref: string,
  title: string,
  imageTitle: string
}

const Game = () => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  return(
    <>
      <Navbar setActiveTab={setActiveTab}/>
      {activeTab ? (
      <TabContent activeTab={activeTab}></TabContent>
      ) : <Home/>}
    </>
    )
      };

//   AppRegistry.registerComponent('App', () => AppRoot);
// if (typeof window !== 'undefined') {


// // App entry point for web
// AppRegistry.runApplication('App', {
//   initialProps: {},
//   rootTag: document.getElementById('root'),
// });
// }

// AppRegistry.registerComponent(appName, () => App);
//   if (Platform.OS === 'web') {
//     AppRegistry.runApplication(appName, {
//     initialProps: {},
//     rootTag: document.getElementById('app-root'),
//   });
// }
// export default function TabOneScreen() {
//   return (
//     // <View style={styles.container}>
//     //   <Text style={styles.title}>Tab One</Text>
//     //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//     //   <EditScreenInfo path="app/(tabs)/index.tsx" />
//     // </View>
//     <App />
//     // <Scores title={title} setTitle={setTitle} scores={scores}></Scores>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
