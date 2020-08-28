import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import Descobrir from './screens/Descobrir/index';

const { Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Screen name="Descobrir" component={Descobrir}/>
      </Navigator>
    </NavigationContainer>
  );
}
