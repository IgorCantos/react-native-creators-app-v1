import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';


import Home from '../screens/Home';
import Pesquisar from '../screens/Pesquisar';
import NovoPost from '../screens/NovoPost';
import Notificacoes from '../screens/Notificacoes';
import Perfil from '../screens/Perfil';
import Filtrar from '../screens/Filtrar';
import { TextInput } from 'react-native-gesture-handler';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <HomeStack.Screen
        name="Filtrar"
        component={Filtrar}
        options={{
          headerTitleAlign: 'center'
        }}
      />
      {/* Filtrar aqui */}
    </HomeStack.Navigator>
  );
}

const PesquisarStack = createStackNavigator();

function PesquisarStackScreen() {
  return (
    <PesquisarStack.Navigator>
      <PesquisarStack.Screen
        name="Pesquisar"
        component={Pesquisar}
        options={{
          headerTitle: "",
          // Devem existir formas melhores de se fazer o que fiz abaixo.
          // Aceito sugestões para melhorar :)
          headerRight: () => (
            <TextInput
                style={{ 
                    width: 300, 
                    height: 40,
                    paddingHorizontal: 15,
                    fontSize: 16,
                    marginRight: 30,
                    backgroundColor: '#EEECEC', 
                    borderColor: 'transparent',
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                placeholder={'Digite aqui para pesquisar...'}
                placeholderTextColor={'#707070'}
            />
          ),
        }}
      />
    </PesquisarStack.Navigator>
  );
}

const NovoPostStack = createStackNavigator();

function NovoPostScreen() {
  return (
    <NovoPostStack.Navigator>
      <NovoPostStack.Screen
        name="Novo Post"
        component={NovoPost}
        options={{
          headerTitleAlign: 'center'
        }}
      />
    </NovoPostStack.Navigator>
  );
}

const NotificacoesStack = createStackNavigator();

function NotificacoesScreen() {
  return (
    <NotificacoesStack.Navigator>
      <NotificacoesStack.Screen
        name="Notificações"
        component={Notificacoes}
        options={{
          headerTitleAlign: 'center'
        }}
      />
    </NotificacoesStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();

function PerfilScreen() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerTitleAlign: 'center'
        }}
      />
    </PerfilStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Ínicio"
        backBehavior="history"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
              iconName = 'home'
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
        <BottomTab.Screen name="Home" component={HomeStackScreen} />
        <BottomTab.Screen name="Notificações" component={NotificacoesScreen} />
        <BottomTab.Screen name="Novo Post" component={NovoPostScreen} />
        <BottomTab.Screen name="Pesquisar" component={PesquisarStackScreen} />
        <BottomTab.Screen name="Perfil" component={PerfilScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}