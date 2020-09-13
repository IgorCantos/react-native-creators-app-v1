import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Pesquisar from '../screens/Pesquisar';
import NovoPost from '../screens/NovoPost';
import Notificacoes from '../screens/Notificacoes';
import Perfil from '../screens/Perfil';

const bottomTabs = createBottomTabNavigator();

function BottomTabsNav() {
  return (
    <bottomTabs.Navigator
      initialRouteName="Ínicio"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              iconName = 'star-border'
          } else if (route.name === 'Pesquisar') {
            iconName = focused
              iconName = 'search'
          } else if (route.name === 'Novo Post') {
            iconName = focused
              iconName = 'add-circle-outline'
          } else if (route.name === 'Notificações') {
            iconName = focused
              iconName = 'notifications-none'
          } else if (route.name === 'Perfil') {
            iconName = focused
              iconName = 'person-outline'
          }
          return <MaterialIcons name={iconName} size={26} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5887F9',
        inactiveTintColor: '#999999',
        labelStyle: {
          fontSize: 11,
          marginBottom: 2,
        },
      }}
    >
      <bottomTabs.Screen name="Home" component={Home} />
      <bottomTabs.Screen name="Pesquisar" component={Pesquisar} />
      <bottomTabs.Screen name="Novo Post" component={NovoPost} />
      <bottomTabs.Screen name="Notificações" component={Notificacoes} />
      <bottomTabs.Screen name="Perfil" component={Perfil} />
    </bottomTabs.Navigator>
  );
}

export default BottomTabsNav;