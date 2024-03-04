import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Input = () => {
  const [text, setText] = useState('');
  return (
    <View style={estilos.caixa}>
      <TextInput
      style = {estilos.input}
        placeholder="Senha"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default Input;

const estilos = StyleSheet.create({
    caixa:{
        backgroundColor: "#F4F4F4",
        width: 300,
        height: 30,
        borderRadius: 15,
    },
    input:{
        fontSize: 16,
        marginLeft: 10,
    }
})