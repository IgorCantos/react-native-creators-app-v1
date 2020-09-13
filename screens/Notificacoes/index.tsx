import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const topTab = createMaterialTopTabNavigator();

import styles from './styles';

function Notificacoes() {
    return (
        <topTab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 19,
                textTransform: 'none',
                fontWeight: 'bold'
              },
            style: {
                elevation: 10,
                paddingTop: 10,
            }}}
        >
            <topTab.Screen 
                name="Gerais" 
                component={Gerais} 
            />
            <topTab.Screen 
                name="Mensagens" 
                component={Mensagens} 
            />
        </topTab.Navigator>
    )
}

function Gerais() {
    return (
        <ScrollView>
        </ScrollView>
    )
}

function Mensagens() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/users-posts/0007/0007-profile-image.png')}
                    style={styles.postProfPic}
                />
                <View>
                    <Text style={styles.postProfName}>
                        Júlia Almeida
                    </Text>
                    <Text style={styles.postProfCategory}>
                        Lorem Ipson dolor sit dolar
                    </Text>
                </View>
                <View style={styles.msgHour}>
                    <Text>Há 10 m</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/users-posts/0006/0006-profile-image.png')}
                    style={styles.postProfPic}
                />
                <View>
                    <Text style={styles.postProfName}>
                        Júlia Almeida
                    </Text>
                    <Text style={styles.postProfCategory}>
                        Lorem Ipson dolor sit dolar
                    </Text>
                </View>
                <View style={styles.msgHour}>
                    <Text>Há 10 m</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/users-posts/0005/0005-profile-image.png')}
                    style={styles.postProfPic}
                />
                <View>
                    <Text style={styles.postProfName}>
                        Júlia Almeida
                    </Text>
                    <Text style={styles.postProfCategory}>
                        Lorem Ipson dolor sit dolar
                    </Text>
                </View>
                <View style={styles.msgHour}>
                    <Text>Há 10 m</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                    style={styles.postProfPic}
                />
                <View>
                    <Text style={styles.postProfName}>
                        Júlia Almeida
                    </Text>
                    <Text style={styles.postProfCategory}>
                        Lorem Ipson dolor sit dolar
                    </Text>
                </View>
                <View style={styles.msgHour}>
                    <Text>Há 10 m</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Notificacoes;