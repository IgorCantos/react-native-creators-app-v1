import React from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';


function UserPost() {
    return (
        <ScrollView>
            <View style={styles.postContainer}>
                <View style={styles.postHeader}>
                    <Image 
                        source={require('../../assets/images/users-posts/0001/0001-profile-image.png')}
                        style={styles.postProfPic}
                    />
                    <View>
                        <Text style={styles.postProfName}>
                            One Of Those Days
                        </Text>
                        <Text style={styles.postProfCategory}>
                            Ilustração, Humor e Dia a Dia.
                        </Text>
                    </View>
                </View>
                <Image 
                    source={require('../../assets/images/users-posts/0001/0001-post-content.png')}
                    style={styles.postContent}
                />
                <Text style={styles.postTitle}>
                    Encontrei todas as novas armas míticas da temporada 3 do fortnite
                </Text>
                <View style={styles.postCategories}>
                    <TouchableOpacity style={styles.postCategoriesBtn}>
                        <Text style={styles.buttonText}>
                            Ilustração
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postCategoriesBtn}>
                        <Text style={styles.buttonText}>
                            Humor
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default UserPost;