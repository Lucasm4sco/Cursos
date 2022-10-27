import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#126716'
    },
    subtitle: {
        fontWeight: '800',
        fontSize: 20,
        color: '#6d7375',
        marginVertical: 12
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 16,
        color: '#abb3b0',
        width: '90%',
        maxWidth: 400,
        marginTop: 10
    },
    imgPlataformas: {
        width: '85%',
        maxWidth: 400,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 20,
        marginTop: 15
    }
});

export default estilo;