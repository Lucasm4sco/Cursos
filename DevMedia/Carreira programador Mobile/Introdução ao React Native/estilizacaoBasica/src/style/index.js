import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100
    },
    cardText: {
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 20,
        borderStyle: 'dotted',
        width: '80%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30
    },
    texto: {
        marginTop: 20,
        textAlign: "center",
        lineHeight: 20,
        fontSize: 14,
        color: '#fff'
    }
  });