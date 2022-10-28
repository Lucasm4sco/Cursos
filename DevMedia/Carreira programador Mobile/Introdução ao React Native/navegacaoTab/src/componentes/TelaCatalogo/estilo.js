import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 28,
        marginBottom: 20,
        alignSelf: 'flex-start'
    },
    paragraph: {
        fontSize: 16,
        width: '95%',
        maxWidth: 400,
        alignSelf: 'flex-start'
    },
    containerVinhos: {
        width: '93%',
        maxWidth: 350,
        marginTop: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ab887c',
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 12,
    },
    imgVinho: {
        height: 100,
        width: '25%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    viewInfo: {
        width: '72%',
    },
    nomeVinho: {
        fontWeight: '800',
        color: '#fff',
        fontSize: 16,
        marginBottom: 10
    },
    descricaoVinho: {
        color: '#fff',
        fontSize: 14
    }
});

export default estilos;