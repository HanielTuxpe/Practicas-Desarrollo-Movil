import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, StyleSheet, TouchableOpacity } from 'react-native';



const RegitroScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Aquí puedes agregar la lógica para recuperar la contraseña
    console.log('Recuperar contraseña');
  };

  const handleCreateAccount = () => {
    // Aquí puedes agregar la lógica para crear una nueva cuenta
    console.log('Crear cuenta');
  };

  return (
    <View style={styles.container}>
    <View style={styles.Text}>
     <Text style={styles.Text}>Registro</Text>
    </View>  
      <View style={styles.header}>
      <Image source={require('./img/log.png')} style={styles.logo}/>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccount}>tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#923',
    margin:30,
    borderRadius:15
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
  },
  body: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'#CDCDCD',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#CDCDCD',
    marginBottom: 10,
  },
  createAccount: {
    textAlign: 'center',
    color: '#CDCDCD',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
  },
  Text: {
    margin:10,
    color:'#CDCDCD',
    fontSize:30
  },
    button: {
        backgroundColor: '#2D4263',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems:'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default RegitroScreen;
