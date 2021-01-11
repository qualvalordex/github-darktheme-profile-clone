import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../styles';

import styles from './styles';

export default function TabBarItem({ children, icon, active }) {
    return(
        <View style={ styles.container }>
            <Icon name={ icon } size={24} color={ colors.darker } style={ active ? styles.active : '' } />
            <Text style={[ styles.text, active ? styles.active : '' ]}>
                { children }
            </Text>
        </View>
    );
}