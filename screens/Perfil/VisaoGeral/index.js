import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function VisaoGeral() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    source={require('../../../assets/images/users-posts/0004/0004-coover-img.png')}
                />
                <View style={styles.profileData}>
                    <Image 
                        style={styles.profileImg}
                        source={require('../../../assets/images/users-posts/0004/0004-profile-image.png')}
                    />
                    <Text style={styles.userName}>
                        Canal Nostalgia
                    </Text>
                    <Text style={styles.profileShortLink}>
                        @canalnostalgia
                    </Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <Text style={styles.editBtnText}>
                            Editar Perfil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View>
                    <Text style={styles.postText}>
                        356
                    </Text>
                    <Text>
                        Posts
                    </Text>
                </View>
                <View>
                    <Text style={styles.postText}>
                        860
                    </Text>
                    <Text>
                        Seguidores
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.aboutText}>
                    Criador do Canal Nostalgia, apaixonado por Ciência e pelo Cosmos. Astronauta da Nasa e apresentador.
                </Text>
            </View>
        </ScrollView>
    )
}

export default VisaoGeral;