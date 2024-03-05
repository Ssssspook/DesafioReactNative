import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import Texto from "../../../componentes/Texto";
import paodesal from '../../../../src/assets/paodesal.png';

export default function Cards(){
    return <TouchableOpacity style={estilos.card}>
        <Image source={paodesal} style={estilos.imagem}/>
        <Texto style={estilos.nome}>Pão de sal</Texto>
        <Texto style={estilos.preco}>R$5,00</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card: {
        width: 110,
        height: 160,
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 5,
    },
    imagem: {
        height: 100,
        width: 100,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    nome: {
        marginHorizontal: 10,
    },
    preco: {
        color: "#32BF00",
        marginHorizontal: 10,
    }
})