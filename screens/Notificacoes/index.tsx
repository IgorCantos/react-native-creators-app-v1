import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import UserNotification from '../../components/Notifications/UserNotification';
import UserMessage from '../../components/Notifications/UserMessage';

const topTab = createMaterialTopTabNavigator();

function Notificacoes() {
    return (
        <topTab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 19,
                textTransform: 'none',
                fontWeight: 'bold'
            },
            style: {
                elevation: 10,
                paddingTop: 10,
            }
        }}
        >
            <topTab.Screen
                name="Gerais"
                component={Gerais}
            />
            <topTab.Screen
                name="Mensagens"
                component={Mensagens}
            />
        </topTab.Navigator>
    )
}

function Gerais() {
    return (
        <ScrollView>
            <UserNotification
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                notificationMsg="Igor Santos começou a seguir o seu perfil."
                time={"Há 16 m"}
            />
            <UserNotification
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                notificationMsg="Igor Santos deixou de seguir o seu perfil."
                time={"Há 16 m"}
            />
            <UserNotification
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                notificationMsg="Igor Santos começou a seguir o seu perfil."
                time="Há 16 m"
            />
        </ScrollView>
    )
}

function Mensagens() {
    return (
        <ScrollView>
            <UserMessage
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                userName="Igor Santos"
                userMsg="Lorem Ipson dolor sit dolar"
                time="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                userName="Igor Santos"
                userMsg="Lorem Ipson dolor sit dolar"
                time="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                userName="Igor Santos"
                userMsg="Lorem Ipson dolor sit dolar"
                time="Há 10 m"
            />
        </ScrollView>
    )
}

export default Notificacoes;