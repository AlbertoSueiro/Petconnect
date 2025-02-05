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
    paddingTop: 40,
  },
  Logo: {
    width: 50,
    height: 50,
    left: 145,
    bottom: 25,
  },
  texto: {
    bottom: 35,
    fontSize: 20,
    color: '#194A6E',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 48,
    fontFamily: 'MoreSugar',
    bottom: 50,
  },
  contenedorAnimales: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 60,
  },
  Perro: {
    height: 135,
    width: 127.5,
    zIndex: 0,
    left: 55,
  },
  Gato: {
    height: 157.5,
    width: 157.5,
    zIndex:0,
    right: 10,
  },
  fondoMarron: {
    width: '100%',
    height: 440,
    backgroundColor: '#363636',
    bottom: 110,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Hazte: {
    fontSize: 27.5,
    color: '#F9F9F9',
    bottom: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  Huella1: {
    height: 40,
    width: 40,
    bottom: 25,
    right: 150,
    transform: [{ rotate: '315deg' }],
  },
  Huella2: {
    height: 40,
    width: 40,
    bottom: 30,
    left: 150,
    transform: [{ rotate: '45deg' }],
  },
  contenedorInputs: {
    width: '100%',
    bottom: 20,
    alignItems: 'center',
  },
  input: {
    width: 330,
    height: 40,
    borderColor: '#FDB672',
    backgroundColor: '#FDB672',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 15,
  },
  contenedorBotones: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22.5,
  },
  botones: {
    backgroundColor: '#666666',
    borderColor: '#F9F9F9',
    borderWidth: 3,
    width: 140,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
  },
  botonCancelar: {
    left: 45,
  },
  textoBoton: {
    color: '#F9F9F9',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding: 7.5,
  },
  Cuenta: {
    color: '#194A6E',
    fontSize: 15,
    bottom: 100,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default RegistroScreen;
