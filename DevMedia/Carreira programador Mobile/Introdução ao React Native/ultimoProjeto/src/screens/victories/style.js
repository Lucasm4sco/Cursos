import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imgCapa: {
        padding: 20,
        alignItems: 'center'
    },
    box: {
        width: '98%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        maxWidth: 350,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        marginBottom: 50
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 20
    },
    text: {
        color: '#939494',
        textAlign: 'center',
        marginBottom: 20
    },
    viewTrophy: {
        width: '90%',
        // backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberTrophy: {
        color: '#eecb01',
        fontSize: 18,
        fontWeight: '700',
        margin: 10
    },
    descriptionTrophy: {
        color: '#939494'
    },
    cardVictory: {
        width: '95%',
        maxWidth: 320,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        marginBottom: 40
    },
    cardTitle: {
        paddingVertical: 20,
        color: '#fff',
        fontSize: 16
    },
    cardImg: {
        width: '100%',
        height: 200
    }
});