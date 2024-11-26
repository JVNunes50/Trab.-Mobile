import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import AppStyles from '../styles/AppStyles';

const PedidoConfirmado = ({ navigation }) => {
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.text}>Seu pedido foi realizado com sucesso!</Text>
      <TouchableOpacity style={AppStyles.button3} onPress={() => navigation.navigate('Menu')}>
        <Text style={AppStyles.button_text}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PedidoConfirmado;