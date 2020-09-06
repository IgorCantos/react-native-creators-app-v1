import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



function Perfil() {
    return (
        <View style={styles.container}>
            <Text>
               Perfil
            </Text>
        </View>
    )
}

export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})