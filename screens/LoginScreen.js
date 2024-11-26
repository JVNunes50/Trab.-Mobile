import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStyles from '../styles/AppStyles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === 'admin') {
      try {
        await AsyncStorage.setItem('username', username);
        setErrorMessage('');
        navigation.navigate('Menu');
      } catch (error) {
        setErrorMessage('Error: ' + error.message);
      }
    } else {
      setErrorMessage('Tente de novo!');
    }
  };

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.input}
        placeholderTextColor="black"
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={AppStyles.input}
        placeholderTextColor="black"
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={AppStyles.button} onPress={handleLogin}>
        <Text style={AppStyles.button_text}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={AppStyles.button_text}>Cadastrar</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={AppStyles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

export default LoginScreen;