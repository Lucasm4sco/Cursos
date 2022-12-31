import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
        width: '100%',
        maxWidth: 380,
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderRadius: 24,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    containerRow: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 30
    },
    description: {
        marginVertical: 2,
        marginRight: 10,
        backgroundColor: 'rgba(130, 234, 126, 0.93)',
        paddingVertical: 10,
        width: 120,
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 10
    },
    input: {
        flexGrow: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 5
    }
})