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
    
    photoContainer: {
        width: '20%',
    },

    msgContainer: {
        width: '65%',
        paddingRight: 5,
    },

    msgContainerText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 5,
    },

    hourContainer: {
        width: '15%',
        textAlign: 'right',
    },

    hourContainerText: {
        fontSize: 12,
        textAlign: 'right',
    }
})

export default styles;