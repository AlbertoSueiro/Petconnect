import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Principal: React.FC = () => {
  return (
    <View style={styles.main}>
      {/* Encabezado */}
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

      {/* Información del usuario */}
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

      {/* Secciones */}
      <View style={styles.sections}>
        <Text style={styles.sectionTitle}>SECCIONES</Text>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.sectionButton, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/huella.png")}
              style={styles.sectionImage}
            />
            <Text style={styles.sectionText}>Patitas al Rescate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sectionButton, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/manos.png")}
              style={styles.sectionImage}
            />
            <Text style={styles.sectionText}>Comunidad Animal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.sectionButton, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/adopt.png")}
              style={styles.sectionImage}
            />
            <Text style={styles.sectionText}>Refugio de Patitas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sectionButton, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/huellas.png")}
              style={styles.sectionImage}
            />
            <Text style={styles.sectionText}>Cuidados de Mascotas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionsRow}>
          <TouchableOpacity style={[styles.sectionButton, { backgroundColor: "#FD7712" }]}>
            <Image
              source={require("../assets/imagenes/principal/lupa.png")}
              style={styles.sectionImage}
            />
            <Text style={styles.sectionText}>Donaciones</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
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
    paddingTop: 80,
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
    fontSize: 32,
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
  sectionButton: {
    width: 180,
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  sectionImage: {
    width: 100,
    height: 100,
  },
  sectionText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto",
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
    fontSize: 24,
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
    width: 160,
    height: 160,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});

export default Principal;
