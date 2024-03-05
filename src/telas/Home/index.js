
import { LinearGradient } from 'expo-linear-gradient';

import Descricao from "./componentes/Descricao";
import Logo from "./componentes/Logo";
import Textinho from "./componentes/Textinho";
import Cards from "./componentes/Cards";
import { View, StyleSheet } from "react-native";




export default function Home(){
    return <>
    <Logo />
    <Textinho />
    <Descricao />
    <LinearGradient
    colors={["#F1BE83", "#F1BE83", "transparent"]}
    style={estilos.gradiente}
    ><View style={estilos.cardsOrg}><Cards />
    <Cards />
    <Cards /></View>
    <View style={estilos.cardsOrg}><Cards />
    <Cards />
    <Cards /></View></LinearGradient>
    </>
}

const estilos = StyleSheet.create({
    gradiente:{
        paddingTop:10,
        alignItems: "center"
    },
    cardsOrg:{
        flexDirection: "row",
        gap: 20,
        paddingBottom: 10,
    }
})