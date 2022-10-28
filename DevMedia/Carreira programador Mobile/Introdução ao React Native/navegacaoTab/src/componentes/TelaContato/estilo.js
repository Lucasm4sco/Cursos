import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 50
    },
    cards: {
        width: '80%',
        maxWidth: 350
    },
    card: {
        width: '100%',
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#400303',
        marginVertical: 10,
        alignItems: 'center'
    },
    titleCard: {
        color: '#400303',
        lineHeight: 40,
        fontSize: 20,
        fontWeight: '800'
    },
    infoCard: {
        color: '#400303'
    }
});

export default estilos;