import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    
    postsRow: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },

    postsContainer: {
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

    textBlue: {
        color: '#5887F9',
    }

})

export default styles;