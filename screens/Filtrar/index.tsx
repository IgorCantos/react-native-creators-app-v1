import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox, Image, Text, View } from 'react-native';

import styles from './styles';

function Filtrar() {
    const [isSelectedPhotos, setSelectionPhotos] = useState(false);
    const [isSelectedVideos, setSelectionVideos] = useState(false);
    const [isSelectedGifs, setSelectionGifs] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Ver somente posts com:
                    </Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelectedPhotos}
                        onValueChange={setSelectionPhotos}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkbox}>
                    </CheckBox>
                    <Text style={styles.checkboxText}>
                        Fotos
                    </Text>
                    <CheckBox
                        value={isSelectedVideos}
                        onValueChange={setSelectionVideos}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkbox}>
                    </CheckBox>
                    <Text style={styles.checkboxText}>
                        Vídeos
                    </Text>
                    <CheckBox
                        value={isSelectedGifs}
                        onValueChange={setSelectionGifs}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkbox}>
                    </CheckBox>
                    <Text style={styles.checkboxText}>
                        GIFS
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        Ver somente posts com:
                    </Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.containerItem}>
                        <Image source={require('../../assets/images/filter-imgs/all-icon.png')} />
                        <Text style={styles.containerItemText}>Todos</Text>
                    </View>
                    <View style={{...styles.containerItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/art-icon.png')} />
                        <Text style={styles.containerItemText}>Pintura</Text>
                    </View>
                    <View style={styles.containerItem}>
                        <Image source={require('../../assets/images/filter-imgs/business-icon.png')} />
                        <Text style={styles.containerItemText}>Negócios</Text>
                    </View>
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={{...styles.containerItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/design-icon.png')} />
                        <Text style={styles.containerItemText}>Design</Text>
                    </View>
                    <View style={{...styles.containerItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/development-icon.png')} />
                        <Text style={styles.containerItemText}>Programação</Text>
                    </View>
                    <View style={styles.containerItem}>
                        <Image source={require('../../assets/images/filter-imgs/marketing-icon.png')} />
                        <Text style={styles.containerItemText}>Marketing</Text>
                    </View>
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.containerItem}>
                        <Image source={require('../../assets/images/filter-imgs/music-icon.png')} />
                        <Text style={styles.containerItemText}>Música</Text>
                    </View>
                    <View style={{...styles.containerItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/photography-icon.png')} />
                        <Text style={styles.containerItemText}>Fotógrafia</Text>
                    </View>
                    <View style={styles.containerItem}>
                        <Image source={require('../../assets/images/filter-imgs/videography-icon.png')} />
                        <Text style={styles.containerItemText}>Cinema</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Filtrar;