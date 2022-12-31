import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: StatusBar.currentHeight + 20
    }
})