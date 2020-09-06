import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



function Notificacoes() {
    return (
        <View style={styles.container}>
            <Text>
               Notificações
            </Text>
        </View>
    )
}

export default Notificacoes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})