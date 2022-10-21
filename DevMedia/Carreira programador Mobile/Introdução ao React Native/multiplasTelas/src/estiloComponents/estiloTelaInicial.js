import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#adb7d1'
    },
    card: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderRadius: 7
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '700'
    },
    paragrafo: {
        textAlign: 'center',
        marginVertical: 25
    },
    img: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        backgroundColor: 'purple',
        marginBottom: 15
    },
    button: {
        width: '100%',
        backgroundColor: '#453851',
        padding: 12,
        marginVertical: 6
    },
    textButton: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    }
});

export default estilo;