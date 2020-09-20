import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 25,
        backgroundColor: 'white',
    },

    profileData: {
        marginTop: -50,
    },

    profileImg: {
        width: 100,
        height: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    userName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
    },

    profileShortLink: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#999999',
        fontSize: 20,
    },

    editBtn: {
        backgroundColor: '#5887F9',
        padding: 15,
        marginVertical: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
    },
    
    editBtnText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: '#D3D7DB',
        borderBottomColor: '#D3D7DB',
        borderWidth: 1,
        paddingVertical: 15,
        backgroundColor: 'white',
    },

    postText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
    },

    aboutText: {
        marginTop: 30,
        fontSize: 16,
    },
})

export default styles;