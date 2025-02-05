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
    paddingTop: 36,
  },
  Logo: {
    width: 45,
    height: 45,
    left: 130.5,
    bottom: 22.5,
  },
  texto: {
    bottom: 13.5,
    fontSize: 18,
    color: '#F9F9F9',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 45,
    marginTop: 9,
    fontFamily: 'MoreSugar',
  },
  fondoBlanco: {
    width: '100%',
    height: 396,
    backgroundColor: 'white',
    marginTop: 22.5,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorAnimales: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 27,
  },
  Perro: {
    height: 157.5,
    width: 144,
    zIndex: 2,
    left: 49.5,
  },
  Gato: {
    height: 171,
    width: 180,
    zIndex: 1,
    right: 27,
  },
  accede: {
    fontSize: 27,
    color: '#194A6E',
    bottom: 54,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  Huella1: {
    height: 36,
    width: 36,
    bottom: 18,
    right: 135,
    transform: [{ rotate: '315deg' }],
  },
  Huella2: {
    height: 36,
    width: 36,
    bottom: 76.5,
    left: 135,
    transform: [{ rotate: '45deg' }],
  },
  contenedorInputs: {
    width: '100%',
    bottom: 67.5,
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
    bottom: 58.5,
  },
  boton: {
    backgroundColor: '#FDB672',
    width: 148.5,
    height: 36,
    borderRadius: 45,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#194A6E',
    fontSize: 13.5,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingTop: 9,
  },
  textoO: {
    fontSize: 21.6,
    color: '#194A6E',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft: 18,
    paddingRight: 18,
  },
  textoRegistro: {
    color: '#194A6E',
    fontSize: 13.5,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
  textoOlvidado: {
    color: '#F9F9F9',
    fontSize: 13.5,
    marginTop: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

