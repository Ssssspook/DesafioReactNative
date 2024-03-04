import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Botao({ texto, onPress, style }) {
  return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
  <Texto style={estilos.textoBotao}>{ texto }</Texto>
</TouchableOpacity>
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#F9E2C6",
    paddingVertical: 16,
    borderRadius: 15,
    width: 122,
    heigth: 56,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
  },
});