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
        <Text style={styles.title}>Nombre del Perro</Text>
        <Text style={styles.subtitle}>Descripción breve del perro.</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Edad</Text>
            <Text style={styles.statSubtitle}>2 años</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Tamaño</Text>
            <Text style={styles.statSubtitle}>Mediano</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Energía</Text>
            <Text style={styles.statSubtitle}>Alta</Text>
          </View>
        </View>

        <View style={styles.ownerInfo}>
          <Image source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Eros2.png")} style={styles.ownerImage} />
          <View>
            <Text style={styles.ownerName}>Juan Pérez</Text>
            <Text style={styles.ownerNickname}>@juanp</Text>
          </View>
        </View>

        <Text style={styles.description}>Este adorable perrito busca un hogar amoroso donde pueda ser feliz.</Text>
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
    width: 40,
    height: 40,
  },
  mainImage: {
    width: "90%",
    height: 200,
    marginVertical: 10,
  },
  infoBlock: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  detailImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  statBox: {
    alignItems: "center",
    width: "30%",
    backgroundColor: "#B5D6ED",
    padding: 10,
    borderRadius: 8,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  statSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  ownerInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ownerNickname: {
    fontSize: 16,
    color: "gray",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  adoptButton: {
    backgroundColor: "#FD7712",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginVertical: 20,
  },
  adoptButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default perros;