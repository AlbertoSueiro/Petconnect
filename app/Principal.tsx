import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Principal: React.FC = () => {
  return (
    <View style={styles.main}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} disabled>
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
            <Link href="/refugio" style={styles.buttonContent}>
              <Image
                source={require("../assets/imagenes/principal/adopt.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Refugio de Patitas</Text>
            </Link>
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
    paddingTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton: {
    padding: 5,
  },
  menuText: {
    fontSize: 25,
    color: "#F9F9F9",
  },
  companyName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F9F9F9",
    fontFamily: "Roboto",
    paddingLeft: 40,
  },
  logo: {
    width: 50,
    height: 50,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#194A6E",
    width: "90%",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 6,
  },
  userName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  userProfile: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Roboto",
  },
  sections: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    backgroundColor:"#fff"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FD7712",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  sectionsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
    width: "100%",
  },
  button: {
    width: 100,  
    height: 100, 
    alignItems:"center",
    borderRadius: 4,
    padding: 10,
    margin:5,
  },
  buttonContent: {
    alignItems: "center", 
  },
  buttonImage: {
    width: 45,  
    height: 45,
    margin: 4, 
  },
  buttonText: {
    fontSize: 12,
    color: "black",
  },
  footer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#194A6E",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
  },
  footerTitle: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  footerImages: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  footerImage: {
    width: 125,
    height: 125,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default Principal;
