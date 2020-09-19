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
                    <Text style={styles.sectionTitle}>
                        Ver somente posts com:
                    </Text>
                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={isSelectedPhotos}
                        onValueChange={setSelectionPhotos}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkBox}>
                    </CheckBox>
                    <Text style={styles.checkBoxText}>
                        Fotos
                    </Text>

                    <CheckBox
                        value={isSelectedVideos}
                        onValueChange={setSelectionVideos}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkBox}>
                    </CheckBox>
                    <Text style={styles.checkBoxText}>
                        Vídeos
                    </Text>

                    <CheckBox
                        value={isSelectedGifs}
                        onValueChange={setSelectionGifs}
                        tintColors={{ true: '#5887F9', false: '#5887F9' }}
                        style={styles.checkBox}>
                    </CheckBox>
                    <Text style={styles.checkBoxText}>
                        GIFS
                    </Text>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>
                        Ver somente posts com:
                    </Text>
                </View>

                <View style={styles.checkBoxContainer}>
                    <View style={styles.categoryItem}>
                        <Image source={require('../../assets/images/filter-imgs/all-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Todos
                        </Text>
                    </View>
                    <View style={{...styles.categoryItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/art-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Pintura
                        </Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Image source={require('../../assets/images/filter-imgs/business-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Negócios
                        </Text>
                    </View>
                </View>

                <View style={styles.checkBoxContainer}>
                    <View style={{...styles.categoryItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/design-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Design
                        </Text>
                    </View>
                    <View style={{...styles.categoryItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/development-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Programação
                        </Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Image source={require('../../assets/images/filter-imgs/marketing-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Marketing
                        </Text>
                    </View>
                </View>

                <View style={styles.checkBoxContainer}>
                    <View style={styles.categoryItem}>
                        <Image source={require('../../assets/images/filter-imgs/music-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Música
                        </Text>
                    </View>
                    <View style={{...styles.categoryItem, ...styles.active}}>
                        <Image source={require('../../assets/images/filter-imgs/photography-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Fotógrafia
                        </Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Image source={require('../../assets/images/filter-imgs/videography-icon.png')} />
                        <Text style={styles.categoryItemText}>
                            Cinema
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.loading}>
                        ...
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default Filtrar;