import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgCapa: {
        width: 210,
        height: 210,
        resizeMode: 'cover',
        borderRadius: 105,
        borderWidth: 2,
        borderColor: '#000', 
        marginBottom: 50
    },
    box: {
        width: '80%',
        maxWidth: 350,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',        
        borderRadius: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 15
    },
    description: {
        color: '#a0a0a0',
        marginBottom: 10
    }
})