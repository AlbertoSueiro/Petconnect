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
    paddingTop: 4.5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 9,
    paddingVertical: 4.5,
  },
  menuButton: {
    padding: 4.5,
  },
  menuText: {
    fontSize: 22.5,
    color: "#F9F9F9",
  },
  companyName: {
    fontSize: 28.8,
    fontWeight: "bold",
    color: "#F9F9F9",
    fontFamily: "Roboto",
    paddingLeft: 36,
  },
  logo: {
    width: 45,
    height: 45,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
    backgroundColor: "#194A6E",
    width: "90%",
    padding: 7.2,
    borderRadius: 9,
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 5.4,
  },
  userName: {
    fontSize: 14.4,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  userProfile: {
    fontSize: 12.6,
    color: "#fff",
    fontFamily: "Roboto",
  },
  sections: {
    alignItems: "center",
    width: "100%",
    marginTop: 18,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FD7712",
    marginBottom: 7.2,
    fontFamily: "Roboto",
  },
  sectionsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 7.2,
    width: "100%",
  },
  button: {
    width: 90,
    height: 90,
    alignItems: "center",
    borderRadius: 3.6,
    padding: 9,
    margin: 4.5,
  },
  buttonContent: {
    alignItems: "center",
  },
  buttonImage: {
    width: 40.5,
    height: 40.5,
    margin: 3.6,
  },
  buttonText: {
    fontSize: 10.8,
    color: "black",
  },
  footer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#194A6E",
    padding: 9,
    borderTopLeftRadius: 13.5,
    borderTopRightRadius: 13.5,
    marginTop: 9,
  },
  footerTitle: {
    fontSize: 13.5,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 7.2,
    fontFamily: "Roboto",
  },
  footerImages: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerImage: {
    width: 112.5,
    height: 112.5,
    marginHorizontal: 8,
    borderRadius: 9,
  },
});

export default Principal;

