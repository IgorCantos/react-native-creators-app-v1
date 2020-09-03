import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import SearchItem from '../../components/SeachItem';

function Pesquisar() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.sectionTitle}>Em alta na plataforma:</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0003/0003-post-content.png')}
                        title="ENCONTREI TODAS AS NOVAS ARMAS MÍTICAS DA TEMPORADA 3 DO FORTNITE"
                        profileName="Flakes Power"
                    />
                </View>
                <View style={styles.itemContainer}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0003/0003-post-content.png')}
                        title="ENCONTREI TODAS AS NOVAS ARMAS MÍTICAS DA TEMPORADA 3 DO FORTNITE"
                        profileName="Flakes Power"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Pesquisar;