import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import UserNotification from '../../../components/Notifications/UserNotification';


function Gerais() {
    return (
        <ScrollView>
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0003/0003-profile-image.png')}
                notificationMsg="Flakes Power começou a seguir o seu perfil."
                msgTime="Há 3 m"
            />
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0005/0005-profile-image.png')}
                notificationMsg="Kami Kat começou a seguir o seu perfil."
                msgTime="Há 5 m"
            />
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0007/0007-profile-image.png')}
                notificationMsg="Um Sábado Qualquer deu like em seu post: A origem do universo | Teoria do BIG BANG - Nostalgia Ciência."
                msgTime="Há 6 m"
            />
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0006/0006-profile-image.png')}
                notificationMsg="BRKsEDU deixou de seguir o seu perfil."
                msgTime="Há 8 m"
            />
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0001/0001-profile-image.png')}
                notificationMsg="One Of Those Days começou a seguir o seu perfil."
                msgTime="Há 11 m"
            />
            <UserNotification
                profileImg={require('../../../assets/images/users-posts/0002/0002-profile-image.png')}
                notificationMsg="Coisa de Nerd começou a seguir o seu perfil."
                msgTime="Há 17 m"
            />
        </ScrollView>
    )
}

export default Gerais;