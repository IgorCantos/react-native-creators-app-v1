import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


function SearchItem(props) {
    return (
        <View>
            <Image 
                source={props.postContent}
                style={styles.postContent}
            />
            <Text 
                numberOfLines={2} 
                style={styles.postTitle}>
                {props.title}
            </Text>
            <Text 
                numberOfLines={1} 
                style={styles.postProfName}>
                Por {props.profileName}
            </Text>
        </View>
    )
}

export default SearchItem;