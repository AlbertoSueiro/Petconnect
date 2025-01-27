import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const principal: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} disabled>
          <Text style={styles.menuText}>☰</Text> {/* Botón de menú no se si al final sera o no funcional*/}
        </TouchableOpacity>
        <Text style={styles.companyName}>PetConnect</Text>
        <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/logo2.png")} style={styles.logo} />
      </View>

      {/* Información del usuario */}
      <View style={styles.userInfo}>
        <Image source={require('../assets/imagenes/ELEMENTOS_GENERALES/perfil.png')} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>Sonia M</Text> {/* Nombre de usuario */}
          <Text style={styles.userProfile}>SoniaMPets</Text> {/* Perfil*/}
        </View>
      </View>

      {/* Botones */}
      <View style={styles.buttons}>
        <Text style={styles.title}>SECCIONES</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FD7712' }]} onPress={() => {/* Navegar a pagina 1 */}}>
            <Image source={require('../assets/imagenes/principal/huella.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Patitas al Rescate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FD7712' }]} onPress={() => {/* Navegar a pagina 2 */}}>
            <Image source={require('../assets/imagenes/principal/manos.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Comunidad Animal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FD7712' }]} onPress={() => {/* Navegar a pagina 3 */}}>
            <Image source={require('../assets/imagenes/principal/adopt.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Refugio de Patitas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FD7712' }]}>
            <Image source={require('../assets/imagenes/principal/huellas.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Patitas en Marcha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FD7712' }]}>
            <Image source={require('../assets/imagenes/principal/lupa.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Sobre PetConnect</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Imágenes del final */}
      <View style={styles.footer}>
        <Text style={styles.subTitle}>PROTECTORAS EN COLABORACIÓN</Text>
        <View style={styles.footerImages}>
          <Image source={require('@/assets/imagenes/principal/protectora1.png')} style={styles.footerImage} />
          <Image source={require('@/assets/imagenes/principal/protectora2.png')} style={styles.footerImage} />
        </View>
      </View>
    </View>
  );
};

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 740, // Las medidas que nos 
    height: 1440, // dio Paco (creo q eran estas)
    margin: 'auto',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderColor: '#ccc',
    backgroundColor: '#194A6E', // Color de fondo del header
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  menuButton: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  menuText: {
    fontSize: 32,
    color: '#fff',
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 8,
  },
  companyName: {
    fontSize: 32, 
    fontWeight: 'bold',
    fontFamily: 'WendyOne',
    color: '#fff', 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    backgroundColor: '#194A6E', 
    padding: 16,
    borderRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  userName: {
    margin: 0,
    fontSize: 20,
    color: '#fff', 
  },
  userProfile: {
    margin: 0,
    fontSize: 16,
    color: '#ccc', 
  },
  buttons: {
    alignItems: 'center',
    marginVertical: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FD7712',
    marginBottom: 16,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: '#194A6E', // Color de fondo del footer
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  subTitle: {
    fontSize: 24, // Tamaño más grande
    marginBottom: 16,
    color: '#fff', // Ajustar color del texto para mejor contraste
  },
  footerImages: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerImage: {
    width: 120,
    height: 120,
    marginHorizontal: 8,
  },
});

export default principal;
