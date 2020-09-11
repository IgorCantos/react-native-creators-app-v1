import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons';

const topTab = createMaterialTopTabNavigator();

import styles from './styles';
import UserPost from '../../components/UserPost';

function MeuPerfil() {
    return (
        <topTab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 19,
                textTransform: 'none',
                fontWeight: 'bold'
            },
            style: {
                elevation: 10,
                height: 100,
                paddingTop: 45,
            }
        }}
        >
            <topTab.Screen
                name="Perfil"
                component={Perfil}
            />
            <topTab.Screen
                name="Posts"
                component={Posts}
            />
        </topTab.Navigator>
    )
}

function Perfil() {
    return (
        <ScrollView>
            <View style={styles.whiteBackground}>
                <Image 
                    style={styles.coverImg}
                    source={require('../../assets/images/users-posts/0004/0004-coover-img.png')}
                />
                <View style={styles.profileInfo}>
                    <Image 
                        style={styles.profImg}
                        source={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                    />
                    <Text style={styles.profileName}>
                        Canal Nostalgia
                    </Text>
                    <Text style={styles.profileLink}>
                        @canalnostalgia
                    </Text>
                    <TouchableOpacity style={styles.editProfBtn}>
                        <Text style={styles.editProfText}>
                            Editar Perfil
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerA}>
                    <View>
                        <Text style={styles.postText}>
                            356
                        </Text>
                        <Text>
                            Posts
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.postText}>
                            860
                        </Text>
                        <Text>
                            Seguidores
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.bioInfo}>
                        Criador do Canal Nostalgia, apaixonado por Ciência e pelo Cosmos. Astronauta da Nasa e apresentador.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

function Posts() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.newPostsText}>356 posts</Text>
                </View>
                <TouchableOpacity style={styles.filterBtn}>
                    <FontAwesome name="filter"/>
                    <Text style={styles.filterBtnText}>
                        Gerenciar
                    </Text>
                </TouchableOpacity>
            </View>
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />            
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />            
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                profileName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
        </ScrollView>
    )
}

export default MeuPerfil;