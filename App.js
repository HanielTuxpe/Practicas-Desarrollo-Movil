import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

export const Header = () => {
  return (
    <View style={styles.encabezado}>
      <Image style={styles.images} source={require("./assets/back.png")} />
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.textF}>
        New to Expo? <Text style={styles.link}> Sign Up</Text>{" "}
      </Text>
    </View>
  );
};

export const Boton = () => {
  return (
    <Pressable style={styles.boton}>
      <Text style={styles.textoB}>Iniciar Sesión</Text>
    </Pressable>
  );
};

export const Body = () => {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.cuerpo}>
      <Text style={styles.textF}>¡Te damos la bienvenida de nuevo!</Text>
      <Text style={styles.textL}>¡Nos alegra tenerte de nuevo!</Text>
      <Text style={styles.textL2}>Información de la cuenta</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Correo electrónico o número de telefono"
        placeholderTextColor={"#A0A0A0"}
      ></TextInput>
      <View style={styles.inputs}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#A0A0A0"
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={22}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.link}>
        ¿Quieres usar un administrador de contraseñas?
      </Text>
      <Boton />
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#5865F2",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  textoB: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#212227",
    alignItems: "strech",
    justifyContent: "center",
    padding: 10,
  },
  encabezado: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  cuerpo: {
    flex: 12,
  },
  pie: {
    flex: 2,
    justifyContent: "start",
    flexDirection: "row",
    backgroundColor: "#000000",
    padding: 20,
  },
  textF: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    color: "#fff",
  },
  textL: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#A0A0A0",
  },
  textL2: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    color: "#A0A0A0",
  },
  images: {
    resizeMode: "cover",
    width: 40,
    height: 40,
  },
  link: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "bold",
    color: "#3D8CB5",
  },
  inputs: {
    backgroundColor: "#32323C",
    marginBottom: 10,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    height: 48,
    borderRadius: 5,
    fontSize: 15,
    padding: 15,
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input:{
    color: "#fff",
    width: 280,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
  },
});
