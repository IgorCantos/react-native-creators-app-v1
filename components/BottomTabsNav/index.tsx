import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFire, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Home from '../../screens/Home';
import Pesquisar from '../../screens/Pesquisar';

const Tab = createBottomTabNavigator();

function BottomTabsNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'faFire'
              : 'faFire';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'faFire' : 'faFire';
          }
          return <FontAwesomeIcon icon={faFire} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5887F9',
        inactiveTintColor: '#999999',
      }}
    >
      <Tab.Screen name="Ínicio" component={Home} />
      <Tab.Screen name="Pesquisar" component={Pesquisar} />
    </Tab.Navigator>
  );
}

export default BottomTabsNav;