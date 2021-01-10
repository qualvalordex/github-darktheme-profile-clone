import React from 'react';

import { View, Image, Text } from 'react-native';

import BioLine from './BioLine';

import { colors } from '../../styles';
import styles from './styles';

export default function Biography() {
    return(
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image
                    source = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                    style = { styles.image }
                />
                <View style={ styles.nameContainer }>
                    <Text style={ styles.name }>
                        Paulo Henrique Rodrigues
                    </Text>
                    <Text style={ styles.username }>
                        qualvalordex
                    </Text>
                </View>
            </View>

            <View style={ styles.bioContainer }>
                <Text style={ styles.bio }>
                    B. Sc. in Mathematics and Master's student in Biossytems at Federal University of ABC. Member of the Computational Biology and Biophysics Laboratory of UFABC.
                </Text>
            </View>

            <BioLine icon='group'>Universidade Federal do ABC</BioLine>
            <BioLine icon='location-on'>Santo André, State of São Paulo, Brazil</BioLine>
            <BioLine icon='perm-identity'>3 seguidores • 3 seguindo</BioLine>
        </View>
    );
}