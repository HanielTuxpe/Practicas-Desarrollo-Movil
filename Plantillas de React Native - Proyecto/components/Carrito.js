import React, { useState } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity, StyleSheet } from 'react-native';

const productsData = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 },
  { id: 4, name: 'Producto 4', price: 40 },
];

const CartTemplate = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => addToCart(item)} style={styles.item}> 
      <Text>{item.name} - ${item.price}</Text>
      <Image source={require('./img/laipz.jpg')}  style={styles.imagen}/>
    </TouchableOpacity>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
        <View style={styles.texto}>
            <Text>{item.name} - ${item.price}</Text>
        </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <Text style={{ color: 'white' }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Disponibles</Text>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>Carrito</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#923',
    margin:20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#fff'
  },
  item: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#38609E',
    borderRadius: 5,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#2D4263',
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  imagen:
  {
    width:50,
    height:50
  },
  texto:{   
    backgroundColor:'#fff'
  }
});

export default CartTemplate;
