import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../../styles';
import styles from './styles';

export default function BioLine({ icon, children }) {
    return(
        <View style={ styles.container }>
            <Icon name={ icon } size={ 16 } color={ colors.dark } style={ styles.icon } />
            <Text style={ styles.text }>
                { children }
            </Text>
        </View>
    );
}