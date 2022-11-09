import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollview: {
        flex: 1
    },
    boxView: {
        paddingTop: 8,
        alignItems: "center",
        justifyContent: 'center'
    }, 
    limitContentView: {
        width: '90%',
        maxWidth: 360,
    }, 
    title: {
        fontSize: 22,
        fontWeight: '700'
    },
    img: {
        resizeMode: 'contain',
        height: 200,
        borderRadius: 10,
        marginVertical: 10
    },
    description: {
        fontWeight: '700',
        color: '#757575',
        marginBottom: 20
    },
    boxScrollview: {
        padding: 6,
        alignItems: 'center',
    },
    boxAbout: {
        width: '100%',
        maxWidth: 420,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d5d5d5',
        marginBottom: 20
    },
    imgBox: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    textBox: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 6
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5
    },
    descriptionBox: {
        fontSize: 13,
        
    }

});