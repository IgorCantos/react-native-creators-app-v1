import React from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';
import UserPost from '../../components/UserPost/UserPost';


function Home() {
    return (
        <ScrollView>
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
        </ScrollView>
    )
}

export default Home;