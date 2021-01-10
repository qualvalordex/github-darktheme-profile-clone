import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: 60,
        padding: 10,
        backgroundColor: colors.primary
    }
});