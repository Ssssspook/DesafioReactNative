import { View, StyleSheet } from "react-native";
import Texto from "../../componentes/Texto";



export default function Contato(){
    return <>
    <Texto style={estilos.contato}>Contato</Texto>
    <View style={estilos.barra} />
    <Texto style={estilos.titulo}>Endereço</Texto>
    <View style={estilos.caixa}>
        <Texto style={estilos.texto}>Endereço: Rua José Lourenço Kelmer, s/n - Campus Universitário</Texto>
    </View>
    <Texto style={estilos.titulo}>Telefone</Texto>
    <View style={estilos.caixa}>
        <Texto style={estilos.texto}>(32)988167981</Texto>
    </View>
    <Texto style={estilos.titulo}>E-mail</Texto>
    <View style={estilos.caixa}>
        <Texto style={estilos.texto}>paodossonhos@gmail.com</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    contato:{
        fontSize: 32,
    },
    titulo: {
        fontSize: 16,
    },
    barra: {
        borderBottomColor: "#F1BE83",
        borderBottomWidth: 5,
        marginBottom: 7.5,
    },
    caixa: {
        backgroundColor: "#F9E2C6",
        paddingVertical: 24,
        marginTop: 3,
        marginBottom: 5,
    },
    texto:{
        textAlign: "center",
        fontSize: 16,
    }
})