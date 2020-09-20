import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import UserPost from '../../../components/UserPost';
import styles from './styles';

function MeusPosts() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.newPostsCounter}>
                        Você possui 4 posts
                    </Text>
                </View>
                <TouchableOpacity 
                    style={styles.filterBtn}
                >
                    <MaterialIcons name="filter-list" size={26} color="#5887F9" />
                    <Text style={styles.filterBtnText}>
                        Gerenciar
                    </Text>
                </TouchableOpacity>
            </View>
            <UserPost
                profileImg={require('../../../assets/images/users-posts/0004/0004-profile-image.png')}
                userName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../../assets/images/users-posts/0004/0004-profile-image.png')}
                userName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../../assets/images/users-posts/0004/0004-post-content-1.png')}
                postTitle="Você sabe como surgiu a lua? - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../../assets/images/users-posts/0004/0004-profile-image.png')}
                userName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../../assets/images/users-posts/0004/0004-post-content-2.png')}
                postTitle="Albert Einstein: um dos maiores GÊNIOS que já viveram | Nostalgia História"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../../assets/images/users-posts/0004/0004-profile-image.png')}
                userName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../../assets/images/users-posts/0004/0004-post-content-3.png')}
                postTitle="COMO os DINOSSAUROS foram EXTINTOS? | Nostalgia Ciência"
                postCategory="Ciência"
            /> 
        </ScrollView>
    )
}

export default MeusPosts;