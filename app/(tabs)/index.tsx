import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.main}>
      <Text style={estilos.texto}>Bienvenido a</Text>
      <Text style={[estilos.texto, estilos.titulo]}>Petconnet</Text>

      <View style={estilos.fondoBlanco}>
        <Text style={estilos.accede}>Accede al refugio</Text>

        <TextInput
          style={estilos.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={estilos.input}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
        />
        
        <View style={estilos.contenedorAccede}>
          <TouchableOpacity style={estilos.boton}>
            <Text style={estilos.textoBoton}>Acceder</Text>
          </TouchableOpacity>
          <Text style={estilos.textoO}>o</Text>
          <TouchableOpacity>
            <Text style={estilos.textoRegistro}>Regístrate</Text>
          </TouchableOpacity>
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
  texto: {
    fontSize: 20,
    color: '#F9F9F9',
    fontFamily: 'Roboto',
  },
  titulo: {
    fontSize: 50,
    marginTop: 20,
    fontFamily: 'WendyOne',
  },
  fondoBlanco: {
    width: '100%',
    height: 440,
    backgroundColor: 'white',
    marginTop: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  accede: {
    fontSize: 30,
    color: '#194A6E',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 330,
    height: 40,
    borderColor: '#FDB672',
    backgroundColor: '#FDB672',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 14,
  },
  boton: {
    backgroundColor: '#FDB672',
    width:165,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#194A6E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contenedorAccede: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoO: {
    fontSize: 20,
    color: '#194A6E',
    fontWeight: 'bold',
    paddingRight:15,
    paddingLeft:15,
  },
  textoRegistro: {
    color: '#194A6E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoOlvidado: {
    color: '#F9F9F9',
    fontSize: 18,
    marginTop:30,
  },
});
