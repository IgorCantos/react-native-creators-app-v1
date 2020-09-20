import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function UserMessage(props) {
    return (
        <View style={styles.container}>
            <Image
                source={props.profileImg}
                style={styles.profileImg}
            />
            <View>
                <Text style={styles.userName}>
                    {props.userName}
                </Text>
                <Text style={styles.profileCategory}>
                    {props.userMsg}
                </Text>
            </View>
            <View style={styles.msgTime}>
                <Text>
                    {props.msgTime}
                </Text>
            </View>
        </View>
    )
}

export default UserMessage;