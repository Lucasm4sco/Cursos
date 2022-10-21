import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 10,
        textAlign: 'center'
    },
    descricao: {
        textAlign: 'center',
        maxWidth: 400,
        lineHeight: 20,
        marginBottom: 25
    },
    card: {
        width: '80%',
        maxWidth: 400,
        padding: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        marginBottom: 8
    },
    imgCard:{
        width: '100%',
        height: 80,
        resizeMode: 'cover'
    },
    nameCard: {
        fontWeight: '700',
        lineHeight: 30
    }
});

export default estilo;