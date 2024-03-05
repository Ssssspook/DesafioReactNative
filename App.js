import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


import Texto from './src/componentes/Texto';
import { RougeScript_400Regular } from '@expo-google-fonts/rouge-script';
import AppRotas from './src/rotas/AppRotas';
import Navbar from './src/componentes/Navbar';


export default function App() {

  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "RougeScript": RougeScript_400Regular
  });

  if (!fonteCarregada) {
    return <View />
  }


  //oi, em varias paginas faltou tempo pra eu componentizar então perdão pela desorganização...
  return (
    
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Navbar />
      <AppRotas />

    
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
