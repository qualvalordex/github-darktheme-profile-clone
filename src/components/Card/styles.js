import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        width: 300,
        padding: 10,
        backgroundColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.darker,
        marginRight: 15,
    },

    lastOne: {
        marginRight:0
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },

    image: {
        width: 15,
        height: 15,
        borderRadius: 3,
        marginRight: 10,
    },

    username: {
        color: colors.dark
    },

    repo: {
        fontWeight: 'bold',
        color: colors.white
    },

    description: {
        color: colors.white,
        marginBottom: 10,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    starsico: {
        fontSize: 16,
        color: colors.mustard,
    },

    langico: {
        fontSize: 12,
    },

    label: {
        color: colors.dark,
        marginHorizontal: 10
    }
});