import { View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

import bread from '../assets/bread.png';
import gerenciamento from '../assets/gerenciamento.png';

export default function Navbar(){

    return <View style={estilos.navbar}>
        <Image source={bread} style={estilos.logo} />
        <Image source={gerenciamento} style={estilos.gerencia} />
    </View>
    
}

const estilos = StyleSheet.create({
    navbar:{
        backgroundColor: "#F1BE83",
        flexDirection: "row",
        paddingVertical:4,
    },
    logo:{
        width: 40,
        height: 40,
        marginLeft: 5
    },
    gerencia:{
        position: "absolute",
        width: 40,
        height: 40,
        right: 1,
        marginRight: 5,
        marginTop: 3,
    }
})