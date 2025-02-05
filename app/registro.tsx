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
    paddingTop: 36,
  },
  Logo: {
    width: 45,
    height: 45,
    left: 130.5,
    bottom: 22.5,
  },
  texto: {
    bottom: 31.5,
    fontSize: 18,
    color: '#194A6E',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 43.2,
    fontFamily: 'MoreSugar',
    bottom: 45,
  },
  contenedorAnimales: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 54,
  },
  Perro: {
    height: 121.5,
    width: 114.75,
    zIndex: 0,
    left: 49.5,
  },
  Gato: {
    height: 141.75,
    width: 141.75,
    zIndex: 0,
    right: 9,
  },
  fondoMarron: {
    width: '100%',
    height: 396,
    backgroundColor: '#363636',
    bottom: 99,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Hazte: {
    fontSize: 24.75,
    color: '#F9F9F9',
    bottom: 27,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  Huella1: {
    height: 36,
    width: 36,
    bottom: 22.5,
    right: 135,
    transform: [{ rotate: '315deg' }],
  },
  Huella2: {
    height: 36,
    width: 36,
    bottom: 27,
    left: 135,
    transform: [{ rotate: '45deg' }],
  },
  contenedorInputs: {
    width: '100%',
    bottom: 18,
    alignItems: 'center',
  },
  input: {
    width: 297,
    height: 36,
    borderColor: '#FDB672',
    backgroundColor: '#FDB672',
    borderWidth: 1,
    borderRadius: 45,
    marginBottom: 13.5,
    paddingLeft: 9,
    fontSize: 13.5,
  },
  contenedorBotones: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20.25,
  },
  botones: {
    backgroundColor: '#666666',
    borderColor: '#F9F9F9',
    borderWidth: 2.7,
    width: 126,
    height: 36,
    borderRadius: 45,
    alignItems: 'center',
  },
  botonCancelar: {
    left: 40.5,
  },
  textoBoton: {
    color: '#F9F9F9',
    fontSize: 13.5,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding: 6.75,
  },
  Cuenta: {
    color: '#194A6E',
    fontSize: 13.5,
    bottom: 90,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default RegistroScreen;
