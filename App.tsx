import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Descobrir from './screens/Descobrir';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Screen name="Descobrir" component={Descobrir}/>
      </Navigator>
    </NavigationContainer>
  );
}
