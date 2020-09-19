import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
    },

    sectionTitle: {
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },

    checkBoxContainer: {
        flexDirection: 'row',
    },

    checkBox: {
        marginLeft: 10,
    },

    checkBoxText: {
        fontSize: 18,
        paddingTop: 5,
        marginRight: 15,
    },

    categoryItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        width: '32%',
        height: 100,
        backgroundColor: 'white',
    },

    categoryItemText: {
        fontSize: 15,
        marginTop: 5,
    },

    active: {
        borderColor: '#5887F9',
        borderWidth: 2,
    },

    loading: {
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default styles;