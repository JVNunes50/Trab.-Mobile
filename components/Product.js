import { Image } from 'expo-image';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Product = ({ image, name, description, price }) => {
  const navigation = useNavigation();

  const handleCompra = () => {
    navigation.navigate('Pedido Confirmado');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      
      <TouchableOpacity style={styles.buttonCompra} onPress={handleCompra}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: '#2F4F4F',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#cc0000',
  },
  buttonCompra: {
    backgroundColor: '#ff6a00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Product;