import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../src/telas/Home';
import LoginRotas from './LoginRotas';
import Contato from '../../src/telas/Contato';
import Membros from '../../src/telas/Membros';

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Início') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Contato') {
          iconName = focused ? 'call' : 'call';
        } else if (route.name === 'Membros') {
          iconName = focused ? 'people' : 'people';
        }
        else if (route.name === 'Login') {
          iconName = focused ? 'log-in' : 'log-in';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
        },
      tabBarActiveBackgroundColor: "#F1BE83",
      tabBarInactiveBackgroundColor: "#F1BE83",
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "#565656",
      })} >
      <Tab.Screen name='Início' component={Home}/>
      <Tab.Screen name='Contato' component={Contato}/>
      <Tab.Screen name='Membros' component={Membros}/>
      <Tab.Screen name='Login' component={LoginRotas}/>
    </Tab.Navigator>
  </NavigationContainer>
}