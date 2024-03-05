import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../src/telas/Home';
import LoginRotas from './LoginRotas';
import Contato from '../../src/telas/Contato';
import Membros from '../../src/telas/Membros';

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Login' component={LoginRotas}/>
      <Tab.Screen name='Contato' component={Contato}/>
      <Tab.Screen name='Membros' component={Membros}/>
    </Tab.Navigator>
  </NavigationContainer>
}