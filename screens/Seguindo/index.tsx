import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import UserPost from '../../components/UserPost';

import styles from './styles';

function Seguindo() {
    return (
        <ScrollView>
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                profileName="BRKsEDU"
                profileCategory="Games."
                postContent={require('../../assets/images/users-posts/0006/0006-post-content.png')}
                postTitle="5 Jogos EXCLUSIVOS de Destaque do PS5 | Anúncios do Evento de PlayStation 5"
                postCategory="Games"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0007/0007-profile-image.png')}
                profileName="Um Sábado Qualquer"
                profileCategory="Ilustração e Desenho."
                postContent={require('../../assets/images/users-posts/0007/0007-post-content.png')}
                postTitle="Cães e Gatos - La Casa de Papel!"
                postCategory="Ilustração"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0008/0008-profile-image.png')}
                profileName="Ei Nerd!"
                profileCategory="Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0008/0008-post-content.png')}
                postTitle="EZRA MILLER CANCELADO! FÃS EXIGEM QUE ELE SAIA DOS PRÓXIMOS FILMES"
                postCategory="Nerd"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0009/0009-profile-image.png')}
                profileName="KayPea"
                profileCategory="Games."
                postContent={require('../../assets/images/users-posts/0009/0009-post-content.png')}
                postTitle="KayPea - SYNDRA COSPLAY (HALLOWEEN)"
                postCategory="Games"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0010/0010-profile-image.png')}
                profileName="Felipe Neto"
                profileCategory="Games, Humor e Vlogs."
                postContent={require('../../assets/images/users-posts/0010/0010-post-content.png')}
                postTitle="A VERDADE SOBRE A PARALISAÇÃO DA SAGA MINECRAFT"
                postCategory="Games"
            />
        </ScrollView>
    )
}

export default Seguindo;