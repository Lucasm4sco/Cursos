import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2e2d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 45
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1c621d',
        lineHeight: 80
    },
    description: {
        color: '#fff',
        fontSize: 14
    },
    buttons: {
        minWidth: 180,
        width: '60%',
        maxWidth: 350,
        marginTop: 20
    },
    button: {
        width: '100%',
        minHeight: 100,
        backgroundColor: '#107c0f',
        borderRadius: 12,
        marginVertical: 10,
        display: "flex",
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: '8%',
        alignItems: 'center'
    },
    imgButton: {
        width: '40%',
        height: '100%',
        marginRight: 10
    },
    textButton: {
        width: '50%',
        fontSize: 17,
        color: '#fff'
    }
});

export default estilo;