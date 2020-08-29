import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
        <Screen name="Home" component={Home}/>
      </Navigator>
    </NavigationContainer>
  );
}
