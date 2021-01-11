import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },

    iconContainer: {
        width: 40,
        height: 40,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    text: {
        fontSize: 17,
        color: colors.white
    },

    counter: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    counterText: {
        fontSize: 16,
        color: colors.darker
    },
});