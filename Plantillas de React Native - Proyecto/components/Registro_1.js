import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



const Regitro1Screen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

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
     <Text style={styles.Text}>Proceso de registro</Text>
    </View>  
        <View style={styles.header}>
        <Image source={require('./img/log.png')} style={styles.logo}/>
        </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Correo electronico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="No telefono"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.rnp}>
        <RNPickerSelect 
            onValueChange={(value) => setSelectedValue(value)}
            items={[
                { label: '¿Cuál es el nombre de tu primera mascota?', value: 'opcion1' },
                { label: '¿Cuál es tu comida favorita?', value: 'opcion2' },
                { label: '¿Cuál es tu ciudad natal?', value: 'opcion3' },
            ]}
            value={selectedValue}
        />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Respuesa a la preguta secreta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
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
    margin:10,
    borderRadius:15
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
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
    rnp:
    {
        backgroundColor:'#CDCDCD',
        margin:1,
        marginBottom:10,
        borderRadius:20
    }
});

export default Regitro1Screen;