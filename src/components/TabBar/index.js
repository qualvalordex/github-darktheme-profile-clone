import React from 'react';

import { View } from 'react-native';

import styles from './styles';

import TabBarItem from './TabBarItem';

export default function TabBar() {
    return(
        <View style={ styles.container }>
            <TabBarItem icon='home-outline'>Home</TabBarItem>
            <TabBarItem icon='notifications-outline'>Notificações</TabBarItem>
            <TabBarItem icon='rocket-outline'>Explorar</TabBarItem>
            <TabBarItem icon='person-outline' active={ true }>Perfil</TabBarItem>
        </View>
    );
}