import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors } from '../../styles';

import Card from '../Card';
import MenuItem from '../MenuItem';

export default function Body() {
    return(
        <View style={ styles.container }>
            <View style={ styles.popular }>
                <View style={ styles.header }>
                    <Icon style={ styles.icon } name='star-outline' />
                    <Text style={ styles.text }>
                        Popular
                    </Text>
                </View>
                <ScrollView horizontal={ true } style={ styles.cardscontainer }>
                    <Card
                        image = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                        user = 'qualvalordex'
                        repo = 'expo-unicorns'
                        desc = 'This is an application that help Unstab...'
                        stars = '2'
                        lang = 'JavaScript'
                        color = { colors.corn }
                    />

                    <Card
                        image = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                        user = 'qualvalordex'
                        repo = 'RosalindEX'
                        desc = 'Elixir solutions for Rosalind bioinforma...'
                        stars = '1'
                        lang = 'Elixir'
                        color = { colors.purple }
                    />

                    <Card
                        image = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                        user = 'qualvalordex'
                        repo = 'Saphire'
                        desc = 'Discord bot created with Elixir.'
                        stars = '1'
                        lang = 'Elixir'
                        color = { colors.purple }
                    />
                    
                    <Card
                        image = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                        user = 'qualvalordex'
                        repo = 'eleicoesmunicipais'
                        desc = 'Projeto de análise de dados das eleiç...'
                        stars = '0'
                        lang = 'HTML'
                        color = { colors.orange }
                    />
                    
                    <Card
                        image = {{ uri: 'https://i.imgur.com/Pcb9rpQ.jpeg' }}
                        user = 'qualvalordex'
                        repo = 'ClimaJa'
                        desc = ''
                        stars = '0'
                        lang = 'Python'
                        color = { colors.blue }
                        last = { true }
                    />
                </ScrollView>
            </View>

            <View style={ styles.menu }>
                <MenuItem
                    color = '#906BD6'
                    icon = 'file-tray-stacked-outline'
                    count = '11'
                >
                    Repositórios
                </MenuItem>
                
                <MenuItem
                    color = '#FF8A37'
                    icon = 'people-outline'
                    count = '1'
                >
                    Organizações
                </MenuItem>
                
                <MenuItem
                    color = '#FDCB19'
                    icon = 'star-outline'
                    count = '5'
                >
                    Organizações
                </MenuItem>
            </View>
        </View>
    );
}