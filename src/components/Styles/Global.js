import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'playfairExtraBold',
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'playfairRegular',
        padding: 5,
        textAlign: 'center'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})