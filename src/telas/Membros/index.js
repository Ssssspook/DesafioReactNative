import { View, StyleSheet } from "react-native";
import Texto from "../../componentes/Texto";
import ExemploMembro from "./componentes/ExemploMembro";



export default function Membros(){
    return <>
    <Texto style={estilos.titulo}>Membros</Texto>
    <ExemploMembro />
    <ExemploMembro />
    <ExemploMembro />
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 32,
    },
})