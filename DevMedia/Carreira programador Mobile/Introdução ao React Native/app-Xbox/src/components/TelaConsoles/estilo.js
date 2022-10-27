import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        paddingVertical: 30
    },
    imgConsole: {
        height: 220,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#237d24',
        lineHeight: 60
    },
    subtitle: {
        width: '90%',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 15
    },
    description: {
        width: '95%',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: 50
    }
});

export default estilo;