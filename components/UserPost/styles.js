import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        borderTopColor: '#D3D7DB',
        borderTopWidth: 1,
        backgroundColor: 'white',
    },

    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: 'lightgrey'
    },

    userName: {
        fontWeight: "bold",
        fontSize: 16,
    },

    profileCategory: {
        fontSize: 14,
    },

    dotsMenu: {
        marginLeft: 'auto',
        marginRight: 0,
    },

    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

    postContent: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'lightgrey'
    },

    postCategories: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 20,
    },

    postCategoriesBtn: {
        borderColor: '#5887F9',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 10,
    },

    buttonText: {
        color: '#5887F9',
        fontSize: 14,
    }
})

export default styles;