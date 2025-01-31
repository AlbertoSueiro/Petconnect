import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Principal: React.FC = () => {
  return (
    <View style={styles.main}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} disabled>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.companyName}>PetConnect</Text>
        <Image
          source={require("../assets/imagenes/ELEMENTOS_GENERALES/logo2.png")}
          style={styles.logo}
        />
      </View>

      
      <View style={styles.userInfo}>
        <Image
          source={require("../assets/imagenes/ELEMENTOS_GENERALES/perfil.png")}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>Sonia M</Text>
          <Text style={styles.userProfile}>SoniaMPets</Text>
        </View>
      </View>

     
      <View style={styles.sections}>
        <Text style={styles.sectionTitle}>SECCIONES</Text>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FD7712" }]}>
          <Link href="/mapa" style={styles.buttonContent}>
            <Image source={require("../assets/imagenes/principal/huella.png")} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Patitas al Rescate</Text>
          </Link>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FD7712" }]}>
            <Link href="/comunidad" style={styles.buttonContent}>
              <Image
                source={require("../assets/imagenes/principal/manos.png")} style={styles.buttonImage}/>
              <Text style={styles.buttonText}>Comunidad Animal</Text>
            </Link>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/adopt.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Refugio de Patitas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/huellas.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Cuidados de Mascotas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/lupa.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Donaciones</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>PROTECTORAS EN COLABORACIÓN</Text>
        <View style={styles.footerImages}>
          <Image
            source={require("@/assets/imagenes/principal/protectora1.png")}
            style={styles.footerImage}
          />
          <Image
            source={require("@/assets/imagenes/principal/protectora2.png")}
            style={styles.footerImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#194A6E",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 50,
    color: "#F9F9F9",
  },
  companyName: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#F9F9F9",
    fontFamily: "Roboto",
  },
  logo: {
    width: 100,
    height: 100,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#194A6E",
    width: "90%",
    padding: 16,
    borderRadius: 20,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  userName: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  userProfile: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Roboto",
  },
  sections: {
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    backgroundColor:"#fff"
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FD7712",
    marginBottom: 16,
    fontFamily: "Roboto",
  },
  sectionsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    width: "100%",
  },
  button: {
    width: 200,  
    height: 200, 
    alignItems:"center",
    borderRadius: 8,
    padding: 20,
    margin:10,
  },
  buttonContent: {
    alignItems: "center", 
  },
  buttonImage: {
    width: 90,  
    height: 90,
    margin: 8, 
  },
  buttonText: {
    fontSize: 24,
    color: "black",
    
  },
  footer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#194A6E",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  footerTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Roboto",
  },
  footerImages: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  footerImage: {
    width: 250,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});

export default Principal;
