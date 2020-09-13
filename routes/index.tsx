import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNav from './BottomTabsNav';

export default function Routes() {
  return (
    <NavigationContainer>
        <BottomTabsNav/>
    </NavigationContainer>
  );
}
