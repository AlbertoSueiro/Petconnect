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
    paddingTop: 80,
  },
  Logo: {
    width: 100,
    height: 100,
    left: 290,
    bottom: 50,
  },
  texto: {
    bottom: 30,
    fontSize: 40,
    color: '#F9F9F9',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 96,
    marginTop: 20,
    fontFamily: 'MoreSugar',
  },
  fondoBlanco: {
    width: '100%',
    height: 880,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorAnimales: {
    width: '100%', 
    flexDirection: 'row',  
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    position: 'relative', 
    bottom:60,
  },
  Perro: {
    height: 325,
    width: 320,
    zIndex: 2,  
    left: 115,
  },
  Gato: {
    height: 385,
    width: 400,
    zIndex: 1,  
    right: 60,
  },
  accede: {
    fontSize: 60,
    color: '#194A6E',
    bottom: 120,
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
    bottom: 170,
    left:300,
    transform: [{ rotate: '45deg' }], 
  },
  contenedorInputs:{
    width:'100%',
    bottom:150,
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
    bottom:130,
  },
  boton: {
    backgroundColor: '#FDB672',
    width: 330,
    height:80,
    borderRadius: 100,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#194A6E',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingTop:20,
  },
  textoO: {
    fontSize: 48,
    color: '#194A6E',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft:40,
    paddingRight:40,
  },
  textoRegistro: {
    color: '#194A6E',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
  textoOlvidado: {
    color: '#F9F9F9',
    fontSize: 30,
    marginTop: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});
