import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchItem from '../../components/SeachItem';

import styles from './styles';

function Pesquisar() {
    return (
        <ScrollView>
            <View style={styles.top}>
                <Text style={styles.sectionTitle}>Em alta na plataforma:</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerItem}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                        title="A origem do universo | Teoria do BIG BANG"
                        profileName="Canal Nostalgia"
                    />
                </View>
                <View style={styles.containerItem}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0008/0008-post-content.png')}
                        title="EZRA MILLER CANCELADO! FÃS EXIGEM QUE ELE SAIA DOS PRÓXIMOS FILMES"
                        profileName="Ei Nerd"
                    />
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>
                    Em alta na categoria{' '}
                    <Text style={styles.textHighlight}>
                         Ilustração:
                    </Text>
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerItem}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0007/0007-post-content.png')}
                        title="Cães e Gatos - La Casa de Papel!"
                        profileName="Um Sábado Qualquer"
                    />
                </View>
                <View style={styles.containerItem}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0001/0001-post-content-2.png')}
                        title="Apresentando: The Drama Queen!"
                        profileName="One Of Those Days"
                    />
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>
                    Em alta na categoria{' '}
                    <Text style={styles.textHighlight}>
                         Games:
                    </Text>
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerItem}>
                    <SearchItem 
                        postContent={require('../../assets/images/users-posts/0011/0011-post-content.png')}
                        title="Melhor duo do Fortnite!"
                        profileName="Tex Games"
                    />
                </View>
                <View style={styles.containerItem}>
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