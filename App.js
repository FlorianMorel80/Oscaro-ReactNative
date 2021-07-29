import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// *************Import Componennts********

import Menu from './Components/Menu';
// ***************************************

export default function App() {
  return (
    
    <Menu />

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 30,
  },


  menu: {
    flex:1
  },

  pictotabNavigator: {
    flex:1, 
    flexDirection: 'row',
    alignContent: 'flex-end'
  },

  bannier: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
