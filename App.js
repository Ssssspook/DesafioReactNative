import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';


import Home from './src/telas/Home';

import Texto from './src/componentes/Texto';
import { RougeScript_400Regular } from '@expo-google-fonts/rouge-script';
import Login from './src/telas/Login';

export default function App() {

  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "RougeScript": RougeScript_400Regular
  });

  if (!fonteCarregada) {
    return <View />
  }

  return (
    
    <SafeAreaView>
      <StatusBar />
    
      <Texto> dalva </Texto>

      <Login />

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
