import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postContainer: {
        marginTop: 100,
        flex: 1,
        borderTopColor: '#D3D7DB',
        borderTopWidth: 1,
        borderBottomColor: '#D3D7DB',
        borderBottomWidth: 1,
    },

    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },

    postProfPic: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: 'lightgrey'
    },

    postProfName: {
        fontWeight: "bold",
        fontSize: 16,
    },

    postProfCategory: {
        fontSize: 14,
    },

    postTitle: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

    postContent: {
        width: '100%',
        height: 300,
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
    },

    buttonText: {
        color: '#5887F9',
        fontSize: 14,
    }
})

export default styles;