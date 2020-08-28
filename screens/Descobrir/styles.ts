import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 25,
    },

    newPostsText: {
        fontSize: 16
    },

    filterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#5887F9',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    filterBtnText: {
        color: '#5887F9',
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10,
    },

    filterBtnIcon: {
        color: '#5887F9',
        paddingRight: 10,
    }
})

export default styles;