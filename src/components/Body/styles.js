import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
    popular: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.darker
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    icon: {
        marginRight: 15,
        fontSize: 24,
        color: colors.white
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white
    },

    cardscontainer: {
        flexDirection: 'row',
        width: '100%',
    }
});