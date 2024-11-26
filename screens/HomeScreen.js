import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStyles from '../styles/AppStyles';
import Product from '../components/Product';

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      if (savedUsername) {
        setUsername(savedUsername);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setIsLoggedIn(false);
      setUsername('');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error: ' + error.message);
    }
  };

  const products = [
    {
      image: 'https://receitatodahora.com.br/wp-content/uploads/2021/09/como-fazer-macarrao-scaled.jpg.webp',
      name: 'Macarrão',
      description: 'Macarrão, molho de tomate com carne moida e alecrim',
      price: 54.99,
    },
    {
      image: 'https://s2-redeglobo.glbimg.com/po-VLvR88mgAHqmHnlTeFrqeIcs=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2024/q/B/yR2UhDTXmQmqePD1gzZg/design-sem-nome-10-.png',
      name: 'Taboa de Churrasco',
      description: 'Espetos de: frango, coração de frango, boi, porco, linguiça, salsicha, farofa e vinagrete',
      price: 110.99,
    },
    {
      image: 'https://pubimg.band.uol.com.br/files/0222aa2d839fe54ce696.png',
      name: 'Risoto de carne',
      description: 'Risoto, filé mignon e ervas frescas',
      price: 69.69,
    },
    {
      image: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg',
      name: 'Strogonoff de Frango',
      description: 'Arroz, frango, salsinha, batapalha e cogumelos',
      price: 48.69,
    },
  ];

  return (
    <View style={AppStyles.external}>
      <Text style={AppStyles.title}>CardapiON</Text>
      <ScrollView contentContainerStyle={AppStyles.scrollContainer}>
        <View style={AppStyles.container}>
          {loading ? (
            <ActivityIndicator size="large" color="#e60000" />
          ) : isLoggedIn ? (
            <>
              <Text>Seja bem-vindo, {username}!</Text>

              <TouchableOpacity style={AppStyles.button3} onPress={handleLogout}>
                <Text style={AppStyles.button_text}>Sair</Text>
              </TouchableOpacity>

              <View>
                {products.map((product, index) => (
                  <Product
                    key={index}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                  />
                ))}
              </View>
            </>
          ) : (
            <View>
              <Text>Por favor, faça login para acessar o conteúdo.</Text>
              <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={AppStyles.button_text}>Ir para Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;