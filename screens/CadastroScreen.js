import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStyles from '../styles/AppStyles';

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nomeError, setNomeError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleRegister = async () => {
    let valid = true;
    setNomeError('');
    setUsernameError('');
    setPasswordError('');

    if (nome.trim() === '') {
      setNomeError('O nome é obrigatório');
      valid = false;
    }
    if (username.trim() === '') {
      setUsernameError('O nome de usuário é obrigatório');
      valid = false;
    }
    if (password.trim() === '') {
      setPasswordError('A senha é obrigatória');
      valid = false;
    }

    if (valid) {
      try {
        const user = { nome, username, password };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setErrorMessage('');
        navigation.navigate('Menu');
      } catch (error) {
        setErrorMessage('Error: ' + error.message);
      }
    }
  };

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const user = JSON.parse(userData);
        setNome(user.nome);
        setUsername(user.username);
        setPassword(user.password);
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.input}
        placeholderTextColor="black"
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      {nomeError ? <Text style={AppStyles.errorText}>{nomeError}</Text> : null}

      <TextInput
        style={AppStyles.input}
        placeholderTextColor="black"
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      {usernameError ? (
        <Text style={AppStyles.errorText}>{usernameError}</Text>
      ) : null}

      <TextInput
        style={AppStyles.input}
        placeholderTextColor="black"
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      {passwordError ? (
        <Text style={AppStyles.errorText}>{passwordError}</Text>
      ) : null}

      <TouchableOpacity style={AppStyles.button2} onPress={handleRegister}>
        <Text style={AppStyles.button_text}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={AppStyles.button3} onPress={() => navigation.navigate('Login')}>
        <Text style={AppStyles.button_text}>Voltar ao Login</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default CadastroScreen;