import React from 'react';

import { View, ScrollView } from 'react-native';
import { colors } from './styles';

import Header from './components/Header';
import Biography from './components/Biography';
import Body from './components/Body';

export default function App(){
    return(
        <View style={{ flex:1, backgroundColor:colors.black }}>
            <Header />
            <ScrollView>
                <Biography />
                <Body />
            </ScrollView>
        </View>
    );
}