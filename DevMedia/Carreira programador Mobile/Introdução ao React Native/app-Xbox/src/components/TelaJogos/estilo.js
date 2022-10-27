import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#131313',
        alignItems: 'center',
        paddingVertical: 5
    },
    title: {
        fontSize: 24,
        lineHeight: 70,
        fontWeight: '800',
        color: '#0f6910'
    },
    paragraph: {
        color: '#777777',
        textAlign: 'center',
        width: '90%',
        fontSize: 16,
        marginBottom: 40
    },
    card: {
        maxWidth: 350,
        width: '85%',
        marginBottom: 50
    },
    imgJogo: {
        width: '100%',
        height: 150,
    },
    nameGame: {
        backgroundColor: '#0c0b0c8f',
        height: 45,
        fontSize: 22,
        padding: 5,
        fontWeight: '800',
        color: '#fff'
    },
    description: {
        color: '#fff',
        lineHeight: 20,
        marginTop: 10,
        fontSize: 14
    }
});

export default estilo;