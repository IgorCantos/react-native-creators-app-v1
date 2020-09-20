import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';


function UserPost(props) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <Image 
                    source={props.profileImg}
                    style={styles.profileImg}
                />
                <View>
                    <Text style={styles.userName}>
                        {props.userName}
                    </Text>
                    <Text style={styles.profileCategory}>
                        {props.profileCategory}
                    </Text>
                </View>
                <View style={styles.dotsMenu}>
                    <MaterialIcons name="more-vert" size={26} color="#929292" />
                </View>
            </View>
            <Image 
                source={props.postContent}
                style={styles.postContent}
            />
            <Text style={styles.postTitle}>
                {props.postTitle}
            </Text>
            <View style={styles.postCategories}>
                <TouchableOpacity style={styles.postCategoriesBtn}>
                    <Text style={styles.buttonText}>
                        {props.postCategory}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserPost;