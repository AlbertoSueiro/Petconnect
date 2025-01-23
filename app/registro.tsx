import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link} from "expo-router";

const RegistroScreen = () => {
  return (
    <View style={estilos.main}>
    
          <Image style={estilos.Logo} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/logo2.png")} />
    
          <Text style={estilos.texto}>Registrate en</Text>
          <Text style={[estilos.texto, estilos.titulo]}>Petconnet</Text>
          
          <View style={estilos.contenedorAnimales}>
              <Image style={estilos.Perro} source={require("@/assets/imagenes/PAGINA REGISTRO E INICIO DE SESION/perrito.png")} />
              <Image style={estilos.Gato} source={require("@/assets/imagenes/PAGINA REGISTRO E INICIO DE SESION/gatito.png")} />
          </View>
          <View style={estilos.fondoMarron}>
            
            <Image style={estilos.Huella1} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/huella blanca.png")} />
              
            <Text style={estilos.Hazte}>¡Hazte parte del refugio!</Text>
    
            <Image style={estilos.Huella2} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/huella blanca.png")} />
              
            <View style={estilos.contenedorInputs}>
              <TextInput
                style={estilos.input}
                placeholder="Nombre"
                placeholderTextColor="#666666"
              />
              <TextInput
                style={estilos.input}
                placeholder="Email"
                placeholderTextColor="#666666"
              />
              <TextInput
                style={estilos.input}
                placeholder="Contraseña"
                placeholderTextColor="#666666"
                secureTextEntry
              />
              <TextInput
                style={estilos.input}
                placeholder="Repetir Contraseña"
                placeholderTextColor="#666666"
                secureTextEntry
              />
    
            </View>
            <View style={estilos.contenedorBotones}>
              <TouchableOpacity style={estilos.botones}>
                <Text style={estilos.textoBoton}>Registrate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[estilos.botones, estilos.botonCancelar]}>
                <Text style={estilos.textoBoton}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          
        <Link style={estilos.Cuenta} href="/">¿Tienes ya cuenta?</Link>
          
    
        </View>
  );
};

const estilos = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  Logo: {
    width: 100,
    height: 100,
    left: 290,
    bottom: 50,
  },
  texto: {
    bottom: 70,
    fontSize: 40,
    color: '#194A6E',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 96,
    fontFamily: 'MoreSugar',
    bottom:100,
  },
  contenedorAnimales: {
    width: '100%', 
    flexDirection: 'row',  
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    position: 'relative', 
    bottom:120,
  },
  Perro: {
    height: 270,
    width: 255,
    zIndex: 1,  
    left: 110,
  },
  Gato: {
    height: 315,
    width: 315,
    zIndex: 2,  
    right: 20,
  },
  fondoMarron: {
    width: '100%',
    height: 880,
    backgroundColor: '#363636',
    bottom:220,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Hazte: {
    fontSize: 55,
    color: '#F9F9F9',
    bottom: 60,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  Huella1: {
    height: 80,
    width: 80,
    bottom: 60,
    right: 300,
    transform: [{ rotate: '315deg' }], 
  },
  Huella2:{
    height: 80,
    width: 80,
    bottom: 60,
    left:300,
    transform: [{ rotate: '45deg' }], 
  },
  contenedorInputs:{
    width:'100%',
    bottom:40,
    alignItems:'center',
  },
  input: {
    width: 660,
    height: 80,
    borderColor: '#FDB672',
    backgroundColor: '#FDB672',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 30,
    paddingLeft: 20,
    fontSize: 30,
    
  },
  contenedorBotones: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 45,
  },
  botones: {
    backgroundColor: '#666666',
    borderColor: '#F9F9F9',
    borderWidth:6,
    width: 280,
    height:80,
    borderRadius: 100,
    alignItems: 'center',
  },
  botonCancelar:{
    left:90,
  },
  textoBoton: {
    color: '#F9F9F9',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding:15,
  },
  
  Cuenta: {
    color: '#194A6E',
    fontSize: 30,
    bottom:200,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default RegistroScreen;
