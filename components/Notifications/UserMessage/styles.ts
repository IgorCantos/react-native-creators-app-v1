import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderBottomColor: '#D3D7DB',
        borderBottomWidth: 1,
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

    msgHour: {
        marginLeft: 'auto',
        marginRight: 0,
    },
})

export default styles;