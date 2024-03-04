

import { View, Text, Image, StyleSheet } from 'react-native';
import bread from '../../../../src/assets/bread.png';
import Textinho from './Textinho';

export default function Logo(){
    return <View style={estilos.logo} >
        <Image source={bread} style={estilos.imagem} />
        <Text style={estilos.texto}>Padaria Pão dos Sonhos</Text>
        
    </View>
}

const estilos = StyleSheet.create({
    logo: {
        flexDirection: "row",
        marginHorizontal: 30,
        marginBottom: 10,
    },
    imagem: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    texto: {
        fontFamily: "RougeScript",
        fontSize: 36,
        textAlign: "center",
        lineHeight: 80,
    },

})