import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';


function UserNotification(props) {
    return (
        <View style={styles.container}>
            <View style={styles.profileImgContainer}>
                <Image
                    source={props.profileImg}
                    style={styles.profileImg}
                />
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.notificationMsg}>
                    {props.notificationMsg}
                </Text>
            </View>
            <View style={styles.msgTimeContainer}>
                <Text style={styles.msgTime}>
                    {props.msgTime}
                </Text>
            </View>
        </View>
    )
}

export default UserNotification;