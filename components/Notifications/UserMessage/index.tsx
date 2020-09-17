import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function UserMessage(props) {
    return (
        <View style={styles.container}>
            <Image
                source={props.profileImg}
                style={styles.postProfPic}
            />
            <View>
                <Text style={styles.postProfName}>
                    {props.userName}
                </Text>
                <Text style={styles.postProfCategory}>
                    {props.userMsg}
                </Text>
            </View>
            <View style={styles.msgHour}>
                <Text>
                    {props.time}
                </Text>
            </View>
        </View>
    )
}

export default UserMessage;