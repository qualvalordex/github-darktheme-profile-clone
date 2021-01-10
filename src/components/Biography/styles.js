import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.primary
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    image: {
        width: 70,
        height: 70,
        marginRight: 15,
        borderRadius: 10
    },

    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white
    },

    username: {
        fontSize: 16,
        color: colors.dark
    },

    bioContainer: {
        marginBottom: 10
    },

    bio: {
        fontSize: 16,
        color: colors.white
    }
});