import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: 'white',
    },
    
    container: {
        flex: 1,
        flexDirection: 'row',
        flexBasis: 1,
        paddingHorizontal: 15,
    },

    containerItem: {
        paddingHorizontal: 5,
        maxWidth: '50%',
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 15,
        paddingVertical: 30,
        paddingBottom: 15,
    },

    textHighlight: {
        color: '#5887F9',
    }

})

export default styles;