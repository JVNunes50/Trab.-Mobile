import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import PedidoConfirmado from './screens/PedidoConfirmado';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Menu" component={HomeScreen} />
        <Stack.Screen name="Pedido Confirmado" component={PedidoConfirmado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;