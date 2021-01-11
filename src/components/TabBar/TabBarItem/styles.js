import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

export default StyleSheet.create({
    container: {
        flex: 1/4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 11,
        color: colors.darker,
    },

    active: {
        color: colors.blue
    }
});