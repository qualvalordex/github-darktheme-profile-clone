import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../styles';
import styles from './styles';

export default function Header() {
    return(
        <View style={ styles.container }>
            <Icon name='share' size={30} color={ colors.blue } style={{ marginRight:25 }}/>
            <Icon name='settings' size={30} color={ colors.blue }/>
        </View>
    );
}