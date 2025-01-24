import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const principal: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} disabled>
          <Text style={styles.menuText}>☰</Text> {/* Botón de menú no se si al final sera o no funcional*/}
        </TouchableOpacity>
        <View style={styles.companyInfo}>
          <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/logo2.png")} style={styles.logo} />
          <Text style={styles.companyName}>PetConnect</Text>
        </View>
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
          <TouchableOpacity style={styles.button} onPress={() => {/* Navegar a pagina 1 */}}>
            <Image source={require('../assets/imagenes/principal/huella.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {/* Navegar a pagina 2 */}}>
            <Image source={require('../assets/imagenes/principal/manos.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {/* Navegar a pagina 3 */}}>
            <Image source={require('../assets/imagenes/principal/adopt.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/imagenes/principal/huellas.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/imagenes/principal/lupa.png')} style={styles.buttonImage} />
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuButton: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  menuText: {
    fontSize: 24,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'WendyOne',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
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
  },
  userProfile: {
    margin: 0,
    fontSize: 16,
    color: '#666',
  },
  buttons: {
    alignItems: 'center',
    marginVertical: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    marginHorizontal: 8,
  },
  buttonImage: {
    width: 100,
    height: 100,
    backgroundColor:'FD7712',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 16,
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
