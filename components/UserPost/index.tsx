import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';


function UserPost(props) {
    return (
        <ScrollView>
            <View style={styles.postContainer}>
                <View style={styles.postHeader}>
                    <Image 
                        source={props.profileImg}
                        style={styles.postProfPic}
                    />
                    <View>
                        <Text style={styles.postProfName}>
                            {props.profileName}
                        </Text>
                        <Text style={styles.postProfCategory}>
                            {props.profileCategory}
                        </Text>
                    </View>
                    <View style={styles.dotsMenu}>
                        <FontAwesomeIcon icon={faEllipsisV} />
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
        </ScrollView>
    )
}

export default UserPost;