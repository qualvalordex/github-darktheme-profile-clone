import React from 'react';

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function MenuItem({ children, icon, color, count }) {
    return(
        <View style={ styles.container }>
            <View style={{ flexDirection: 'row' }}>
                <View style={[ styles.iconContainer, { backgroundColor:color } ]}>
                    <Icon
                        name={ icon }
                        size={24}
                        color='#FFF'
                    />
                </View>
                <Text style={ styles.text }>
                    { children }
                </Text>
            </View>
            <View style={ styles.counter }>
                <Text style={ styles.counterText }>
                    { count }
                </Text>
            </View>
        </View>
    );
}