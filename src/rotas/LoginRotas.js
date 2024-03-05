import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GerenciamentoMembros from "../telas/GerenciamentoMembros";
import Login from "../telas/Login";
import Navbar from "../../src/componentes/Navbar";

const Stack = createNativeStackNavigator();

export default function LoginRotas(){
    return <Stack.Navigator  screenOptions={{headerShown: false}} >
        <Stack.Screen name='TelaLogin' component={ Login } />
        <Stack.Screen name='GerenciamentoMembros' component={ GerenciamentoMembros } />
    </Stack.Navigator>
}