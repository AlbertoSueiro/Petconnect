import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link} from "expo-router";

export default function App() {
  return (
    <View style={estilos.main}>

      <Image style={estilos.Logo} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/logo2.png")} />

      <Text style={estilos.texto}>Bienvenido a</Text>
      <Text style={[estilos.texto, estilos.titulo]}>Petconnet</Text>

      <View style={estilos.fondoBlanco}>
        <View style={estilos.contenedorAnimales}>
          <Image style={estilos.Perro} source={require("@/assets/imagenes/PAGINA REGISTRO E INICIO DE SESION/perrito.png")} />
          <Image style={estilos.Gato} source={require("@/assets/imagenes/PAGINA REGISTRO E INICIO DE SESION/gatito.png")} />
        </View>
        <Image style={estilos.Huella1} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/huella naranja.png")} />
          
        <Text style={estilos.accede}>Accede al refugio</Text>

        <Image style={estilos.Huella2} source={require("@/assets/imagenes/ELEMENTOS_GENERALES/huella naranja.png")} />
          
        <View style={estilos.contenedorInputs}>
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
        </View>
        <View style={estilos.contenedorBotones}>
          <TouchableOpacity style={estilos.boton}>
            <Link style={estilos.textoBoton}  href="/Principal">Acceder</Link>
          </TouchableOpacity>
          <Text style={estilos.textoO}>o</Text>
          <Link style={estilos.textoRegistro} href="/registro">Regístrate</Link>
          
        </View>
      </View>

      <TouchableOpacity>
        <Text style={estilos.textoOlvidado}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#194A6E',
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
    bottom: 15,
    fontSize: 20,
    color: '#F9F9F9',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 50,
    marginTop: 10,
    fontFamily: 'MoreSugar',
  },
  fondoBlanco: {
    width: '100%',
    height: 440,
    backgroundColor: 'white',
    marginTop: 25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorAnimales: {
    width: '100%', 
    flexDirection: 'row',  
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    position: 'relative', 
    bottom:30,
  },
  Perro: {
    height: 175,
    width: 160,
    zIndex: 2,  
    left: 55,
  },
  Gato: {
    height: 190,
    width: 200,
    zIndex: 1,  
    right: 30,
  },
  accede: {
    fontSize: 30,
    color: '#194A6E',
    bottom: 60,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  Huella1: {
    height: 40,
    width: 40,
    bottom: 20,
    right: 150,
    transform: [{ rotate: '315deg' }], 
  },
  Huella2:{
    height: 40,
    width: 40,
    bottom: 85,
    left:150,
    transform: [{ rotate: '45deg' }], 
},
  contenedorInputs: {
    width: '100%',
    bottom: 75,
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
    bottom: 65,
  },
  boton: {
    backgroundColor: '#FDB672',
    width: 165,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#194A6E',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingTop: 10,
  },
  textoO: {
    fontSize: 24,
    color: '#194A6E',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textoRegistro: {
    color: '#194A6E',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
  textoOlvidado: {
    color: '#F9F9F9',
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});
