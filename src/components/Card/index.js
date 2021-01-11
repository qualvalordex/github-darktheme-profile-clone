import React from 'react';

import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function Card({ image, user, repo, desc, stars, lang, color, last }) {    
    return(
        <View style={[ styles.container, last ? styles.lastOne : '' ]}>
            <View style={ styles.header }>
                <Image
                    style={ styles.image }
                    source={ image }
                />
                <Text style={ styles.username }>
                    { user }
                </Text>
            </View>
            <Text style={ styles.repo }>
                { repo }
            </Text>
            <Text style={ styles.description }>
                { desc }
            </Text>
            <View style={ styles.footer }>
                <Icon style={ styles.starsico } name='star' />
                <Text style={ styles.label }>
                    { stars }
                </Text>
                <Icon style={ styles.langico } name='ellipse' color={ color } />
                <Text style={ styles.label }>
                    { lang }
                </Text>
            </View>
        </View>
    );
}