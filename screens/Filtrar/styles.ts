import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
    },

    title: {
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },

    checkboxContainer: {
        flexDirection: 'row',
    },

    checkbox: {
        marginLeft: 10,
    },

    checkboxText: {
        fontSize: 18,
        paddingTop: 5,
        marginRight: 15,
    },

    containerItem: {
        margin: 1,
        width: '32%',
        height: 100,
        backgroundColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
    },

    containerItemText: {
        fontSize: 15,
        marginTop: 5,
    },

    active: {
        borderColor: '#5887F9',
        borderWidth: 2,
    }
})

export default styles;