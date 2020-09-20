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
    
    profileImgContainer: {
        width: '20%',
    },
    
    profileImg: {
        width: 50,
        height: 50,
    },

    msgContainer: {
        width: '65%',
        paddingRight: 5,
    },

    notificationMsg: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 5,
    },

    msgTimeContainer: {
        width: '15%',
        textAlign: 'right',
    },

    msgTime: {
        fontSize: 12,
        textAlign: 'right',
    },

})

export default styles;