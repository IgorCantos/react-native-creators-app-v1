import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import UserMessage from '../../../components/Notifications/UserMessage';

function Mensagens() {
    return (
        <ScrollView>
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0008/0008-profile-image.png')}
                userName="Ei Nerd!"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 5 m"
            />
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0009/0009-profile-image.png')}
                userName="KayPea"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0010/0010-profile-image.png')}
                userName="Felipe Neto"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0007/0007-profile-image.png')}
                userName="Um Sábado Qualquer"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0002/0002-profile-image.png')}
                userName="Coisa de Nerd"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 10 m"
            />
            <UserMessage
                profileImg={require('../../../assets/images/users-posts/0005/0005-profile-image.png')}
                userName="Kami Kat"
                userMsg="Lorem Ipson dolor sit dolar"
                msgTime="Há 10 m"
            />
        </ScrollView>
    )
}

export default Mensagens;