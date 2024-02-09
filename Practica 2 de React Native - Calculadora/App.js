import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View,} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Calculadora } from "./components/Calculadora";
import { styles } from "./components/Estilos";

export default function App() {
  return (
    <View style={styles.container}>
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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.cuerpo}>
      <Calculadora/>
    </View>
  );
};