import { StyleSheet } from 'react-native';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import { sin } from 'react-native-reanimated';

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

    whiteBackground: {
        backgroundColor: 'white',
    },

    containerA: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: '#D3D7DB',
        borderBottomColor: '#D3D7DB',
        borderWidth: 1,
        padding: 15,
        marginVertical: 15,
    },

    postText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },

    newPostsText: {
        fontSize: 16,
    },

    profileInfo: {
        marginTop: -50,
    },

    profImg: {
        width: 100,
        height: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    profileName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
    },

    profileLink: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#999999',
        fontSize: 20,
    },

    bioInfo: {
        fontSize: 16,
    },

    editProfBtn: {
        backgroundColor: '#5887F9',
        padding: 15,
        marginVertical: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
    },
    
    editProfText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
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