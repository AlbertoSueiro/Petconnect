import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
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

      <Modal visible={menuVisible} animationType="slide" transparent>
          <View style={styles.menuContainer}>
              <View style={styles.menuContent}>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setMenuVisible(false)}>
                      <Text style={styles.closeText}>X</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/Principal">Pagina Principal</Link></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/mapa">Patitas al Rescate</Link></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/comunidad">Comunidad Animal</Link></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/refugio">Refugio Patitas</Link></TouchableOpacity>
              </View>
          </View>
      </Modal>

      <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/flechita.png")} style={[styles.mainImage, {marginLeft:5}]} />

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
    paddingHorizontal: 8,
    backgroundColor: "#194A6E",
    paddingVertical: 20,
  },
  menuButton: {
    padding: 5,
  },
  menuText: {
    fontSize: 20,
    color: "white",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  menuContent: {
    backgroundColor: "#fff",
    width: "70%",
    height: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  closeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#194A6E",
  },
  menuItem: {
    paddingVertical: 7.5,
  },
  menuTextItem: {
    fontSize: 11,
    color: "#194A6E",
    fontWeight: "bold",
  },
  logo: {
    width: 40,
    height: 40,
  },
  mainImage: {
    width: 40,
    height: 40,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  infoBlock: {
    width: "85%",
    height: "68%",
    backgroundColor: "#FDB672",
    padding: 10,
    borderRadius: 7.5,
    alignItems: "center",
  },
  detailImage: {
    width: "90%",
    height: 225,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom:5,
    alignSelf: "flex-start",
    color: "#194A6E",
  },
  subtitle: {
    fontSize: 12,
    color: "#194A6E",
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  statBox: {
    alignItems: "center",
    width: "30%",
    backgroundColor: "#fff",
    padding: 7.5,
    borderRadius: 10,
  },
  statTitle: {
    fontSize: 12,
    color: "#194A6E",
  },
  statSubtitle: {
    fontSize: 16,
    color: "#194A6E",
  },
  ownerInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  ownerImage: {
    width: 35,
    height: 35,
    borderRadius: 12.5,
    marginRight: 5,
  },
  ownerName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#194A6E",
  },
  ownerNickname: {
    fontSize: 14,
    color: "#194A6E",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
    color: "#194A6E",
  },
  adoptButton: {
    backgroundColor: "#194A6E",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 40,
    width:250,
    height:60,
  },
  adoptButtonText: {
    fontSize: 14,
    color: "white",
    padding:10,
  },
});

export default perros;
