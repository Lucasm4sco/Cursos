import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 29,
        marginBottom: 10,
        color: '#fff'
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 18,
        width: '90%',
        maxWidth: 350,
        lineHeight: 28,
        color: '#fff'
    }
});

export default estilos;