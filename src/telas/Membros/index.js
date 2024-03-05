import { View, StyleSheet } from "react-native";
import Texto from "../../componentes/Texto";



export default function Contato(){
    return <>
    <Texto style={estilos.titulo}>Membros</Texto>
    <View style={estilos.separaInfo} />
    <View style={estilos.fundoCard}>
    <Texto style={estilos.dalva}>Nome: Fulano</Texto>
    <View style={estilos.separaInfo} />
    <Texto style={estilos.dalva}>E-mail: fulanobeltrano@gmail.com</Texto>
    <View style={estilos.separaInfo} />
    <Texto style={estilos.dalva}>Aniversário: 01/01</Texto>
    <View style={estilos.separaInfo} />
    <Texto style={estilos.dalva}>Cargo: Padeiro</Texto>
    <View style={estilos.separaInfo} />
    </View>
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 32,
    },
    fundoCard:{
        backgroundColor: "#F9E2C6"
    },
    dalva: {
        fontSize: 16,
    },
    barra: {
        borderBottomColor: "#F1BE83",
        borderBottomWidth: 5,
        marginBottom: 14,
    },
    separaInfo: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    caixa: {
        backgroundColor: "#F9E2C6",
        paddingVertical: 24,
        marginVertical: 3,
    },
    texto:{
        textAlign: "center",
        fontSize: 16,
    }
})