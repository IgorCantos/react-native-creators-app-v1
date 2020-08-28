import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import UserPost from '../../components/UserPost';

import styles from './styles';

function Seguindo() {
    return (
        <ScrollView>
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0003/0003-profile-image.png')}
                profileName="Flakes Power"
                profileCategory="Games"
                postContent={require('../../assets/images/users-posts/0003/0003-post-content.png')}
                postTitle="ENCONTREI TODAS AS NOVAS ARMAS MÍTICAS DA TEMPORADA 3 DO FORTNITE"
                postCategory="Games"
            />
        </ScrollView>
    )
}

export default Seguindo;