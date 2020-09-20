import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



function NovoPost() {
    return (
        <View style={styles.container}>
            <Text>
               A tela de novo post não será feita nesse projeto.
            </Text>
        </View>
    )
}

export default NovoPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})