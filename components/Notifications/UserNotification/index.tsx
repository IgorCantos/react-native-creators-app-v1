import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';


function UserNotification(props) {
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image
                    source={props.profileImg}
                    style={styles.postProfPic}
                />
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.msgContainerText}>
                    {props.notificationMsg}
                </Text>
            </View>
            <View style={styles.hourContainer}>
                <Text style={styles.hourContainerText}>
                    {props.time}
                </Text>
            </View>
        </View>
    )
}

export default UserNotification;