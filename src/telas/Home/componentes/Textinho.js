import { View, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Textinho(){
    return <View style={estilos.redondo}>
        <Texto style={estilos.textinho}>Pão fresquinho, na porta da sua casa!</Texto>
    </View>
}

const estilos = StyleSheet.create({
    redondo: {
        backgroundColor: "#F9E2C6",
        marginVertical: 15,
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 38,
        borderWidth: 1
    },
    textinho: {
        textAlign: "center",
    }
})