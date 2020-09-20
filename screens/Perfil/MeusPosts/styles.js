import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 25,
    },

    newPostsCounter: {
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
})

export default styles;