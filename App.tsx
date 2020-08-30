import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabsNav from './components/BottomTabsNav';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
        <Screen name="BottomTabNavigation" component={BottomTabsNav}/>
      </Navigator>
    </NavigationContainer>
  );
}
