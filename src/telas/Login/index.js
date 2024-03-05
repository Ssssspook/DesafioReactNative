import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Texto from "../../componentes/Texto";
import InputEmail from "./componentes/InputEmail";
import InputSenha from "./componentes/InputSenha";
import Botao from '../../componentes/Botao';


export default function Login(){
    const navigation = useNavigation();

    return <View style={estilos.tela}>
     <View style={estilos.login}>
        <Texto style={estilos.loginTexto}>Login</Texto>
    </View>
    <Texto style={estilos.valor}> E-mail </Texto>
    <InputEmail />
    <Texto style={estilos.valor}> Senha </Texto>
    <InputSenha />
    <Botao texto={"Entrar"} style={estilos.botao} onPress={() => navigation.navigate('GerenciamentoMembros')}/>
    </View>
}

const estilos = StyleSheet.create({
    tela:{
        justifyContent: "center",
        alignSelf: "center"
    },
    login: {
        width:122,
        backgroundColor: "#F1BE83",
        borderRadius: 20,
        marginBottom: 50,
        alignSelf: "center",
        marginTop: 25,
    },
    loginTexto:{
        fontSize: 32,
        textAlign: "center",
    },
    valor:{
        marginVertical: 2,
        fontSize: 16,
    },
    botao: {
        alignSelf: "center",
        marginTop: 49,
    }
})