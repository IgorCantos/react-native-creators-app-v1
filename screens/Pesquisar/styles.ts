import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexBasis: 1,
        paddingHorizontal: 15,
    },

    itemContainer: {
        paddingHorizontal: 5,
        maxWidth: '50%',
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 100,
        paddingBottom: 15,
    }

})

export default styles;