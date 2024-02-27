
import {StyleSheet, Text, View ,Image} from 'react-native';
import Login from './Login';
import ProdsView from './ProdsView';
import Index from './Index';
import Profile from './Profile';
import CartTemplate from './Carrito';
import RegitroScreen from './Registro';
import Regitro1Screen from './Registro_1';


export const Pack=()=> {

  //MOVER EL ENCABEZADO PARA QUE SE PUEDAN VISUALIZAR ALGUNAS PLANTILLAS

  return (
    <View style={styles.container}>
        <Estado/>
        <Encabezado/>
        <Cuerpo/>
        <Pie/>
    </View>
  );
}

export const Estado=()=>{
    return(
        <View style={styles.estado}>            
        </View>
    )
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <View style={styles.menu}>
            <Image source={require('./img/LOGO.png')} style={styles.img}/>
        </View>
        <View style={styles.menu}>
        <Text style={styles.texto}>Paperplus</Text>
        </View>
        <View style={styles.menu}>
            <Image source={require('./img/cerrar-sesion.png')} style={styles.img}/>
        </View>
    </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <View style={styles.icon}>
        <Image source={require('./img/hogar (1).png')} style={styles.img_final}/>
        <Text style={styles.texto_final}>Incio</Text>
        </View>
        <View style={styles.icon}>
        <Image source={require('./img/papeleria.png')} style={styles.img_final}/>
        <Text style={styles.texto_final}>Productos</Text>
        </View>
        <View style={styles.icon}>
        <Image source={require('./img/carrito.png')} style={styles.img_final}/>
        <Text style={styles.texto_final}>Carrito</Text>
        </View>
        <View style={styles.icon}>
        <Image source={require('./img/usuario.png')} style={styles.img_final}/>
        <Text style={styles.texto_final}>Mi perfil</Text>
        </View>
    </View>
  )
}

export const Cuerpo=()=>{
  //AGREGUE CUALQUIERA DE ESTOS EN PARA VISUALIZAR
  //<Login/>
  //<ProdsView/>
  //<Index/>
  //<Profile/>
  //<RegitroScreen/>
  return(
    <View style={styles.cuerpo}>
      <Regitro1Screen/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff56dbb',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  estado:{
    backgroundColor:'#fff',
    width:'auto',
    height:30
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#1d3019',
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor:'#1d3019',
    alignItems:'center'
  },
  texto:{
    fontSize:25,
    color:'#fff'
  },
  img: {
    width: 30,
    height: 30,
  },
  menu:
  {
    margin:22
  },
  menu_final:
  {

  },
  texto_final:{
    fontSize:10,
    color:'#fff'
  }, 
  img_final: {
    width: 40,
    height: 40,
  },
  icon:
  {
    alignItems:'center',
    margin:34
  }
});