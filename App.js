import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import React from 'react';
import Navigation from './src/navigator/Navigation';
import Globalprovider from './src/config/context';
import Icon from 'react-native-ico-material-design';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {



  return (
    <Globalprovider>
          <Navigation/>
    </Globalprovider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
