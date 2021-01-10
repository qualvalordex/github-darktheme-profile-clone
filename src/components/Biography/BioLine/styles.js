import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    icon:{
        marginRight: 5
    },

    text: {
        fontSize: 16,
        color: colors.white,
    }
});