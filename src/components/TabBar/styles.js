import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: '100%',
        padding: 10,
        backgroundColor: colors.primary
    }
});