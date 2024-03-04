import { View, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";



export default function Descricao(){
    return <View style={estilos.fundo}>
        <Texto style={estilos.texto}>Precisa de um café da manhã, lanche, ou simplesmente ficou com fome? Peça já aqui da Padaria Pão dos Sonhos!</Texto>
    </View>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#F9E2C6",
        
    },
    texto: {
        marginVertical: 8,
        marginHorizontal: 20,
        textAlign: "center",
        fontSize: 14,
    }

})
