import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link} from "expo-router"; 

const perros = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>COMUNIDAD ANIMAL</Text>
        <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/logo2.png")} style={styles.logo} />
      </View>

      <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/flechita.png")} style={styles.mainImage} />

      <View style={styles.infoBlock}>
        <Image source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Pluto.png")} style={styles.detailImage} />
        <Text style={styles.title}>Pluto</Text>
        <Text style={styles.subtitle}>Murcia</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Sexo</Text>
            <Text style={styles.statSubtitle}>Macho</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Edad</Text>
            <Text style={styles.statSubtitle}>1.5 años</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Raza</Text>
            <Text style={styles.statSubtitle}>Bodeguero</Text>
          </View>
        </View>

        <View style={styles.ownerInfo}>
          <Image source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Eros2.png")} style={styles.ownerImage} />
          <View>
            <Text style={styles.ownerName}>Ana</Text>
            <Text style={styles.ownerNickname}>PerrosAbandona2</Text>
          </View>
        </View>

        <Text style={styles.description}>Pluto entró de forma inesperada a una peluquería en
          la que justo estaba uno de nuestros voluntarios, no
          llevaba chip y nadie lo ha reclamado así que busca
          familia definitiva!
        </Text>
      </View>

      <TouchableOpacity style={styles.adoptButton}>
        <Text style={styles.adoptButtonText}>DAME UN HOGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#194A6E",
    paddingVertical: 40,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 40,
    color: "white",
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 80,
    height: 80,
  },
  mainImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  infoBlock: {
    width: "90%",
    backgroundColor: "#FDB672",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  detailImage: {
    width: "100%",
    height: 450,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
    color:"#194A6E"
  },
  subtitle: {
    fontSize: 24,
    color: "#194A6E",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    width: "30%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
  },
  statTitle: {
    fontSize: 24,
    color:"#194A6E"
  },
  statSubtitle: {
    fontSize: 32,
    color:"#194A6E"
  },
  ownerInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  ownerImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
  },
  ownerName: {
    fontSize: 30,
    fontWeight: "bold",
    color:"#194A6E"
  },
  ownerNickname: {
    fontSize: 28,
    color:"#194A6E"
  },
  description: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
    color:"#194A6E"
  },
  adoptButton: {
    backgroundColor: "#194A6E",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginVertical: 20,
  },
  adoptButtonText: {
    fontSize: 28,
    color: "white",
  },
});

export default perros;