import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { Link} from "expo-router"; 

const PatitasRescate: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.main}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PATITAS AL RESCATE</Text>
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

      
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Este mapa conecta a quienes necesitan ayuda con quienes están dispuestos a ofrecerla.
        </Text>
        <Text style={styles.subText}>
        Indica el punto donde un animal, una colonia o una situación requiere atención y descríbela para que podamos actuar juntos.
        </Text>
      </View>

      
      <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/mapa.png")} style={styles.mainImage} />

      
      <View style={styles.roundedTextContainer}>
        <Image source={require("../assets/imagenes/ELEMENTOS_GENERALES/Vector.png")} style={styles.roundedImage} />
        <Text style={styles.roundedText}>
          La ubicación se añadirá automaticamente cuando se seleccione en el mapa.
        </Text>
      </View>

      
      <TextInput
        style={styles.input}
        placeholder="Describe la situación aquí..."
        placeholderTextColor="#666"
        multiline
      />

      
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#194A6E',
    alignItems: "center",
  },
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 9,
    paddingVertical: 9,
  },
  menuButton: {
    padding: 4.5,
  },
  menuText: {
    fontSize: 24,
    color: "#194A6E",
  },
  headerTitle: {
    fontSize: 12.6,
    fontWeight: "bold",
    color: "#194A6E",
    textAlign: "center",
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
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
    paddingTop: 18,
    paddingHorizontal: 9,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 4.5,
  },
  closeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#194A6E",
  },
  menuItem: {
    paddingVertical: 6.75,
  },
  menuTextItem: {
    fontSize: 12,
    color: "#194A6E",
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: '#194A6E',
    alignItems: "center",
    padding: 18,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subText: {
    fontSize: 12.6,
    color: "#F9F9F9",
    textAlign: "center",
    marginTop: 4.5,
  },
  mainImage: {
    backgroundColor: '#194A6E',
    width: "100%",
    height: 280,
    resizeMode: "cover",
    marginBottom: 9,
  },
  roundedTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    padding: 6.75,
    marginHorizontal: 9,
    marginVertical: 4.5,
    width: "90%",
  },
  roundedImage: {
    width: 18,
    height: 27,
    marginRight: 6.75,
  },
  roundedText: {
    fontSize: 11,
    color: "#194A6E",
    fontWeight: "bold",
    padding: 4.5,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#FDB672",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 9,
    padding: 6.75,
    fontSize: 12.6,
    textAlignVertical: "top",
    marginTop: 9,
  },
  sendButton: {
    backgroundColor: "#FD7712",
    width: 120,
    height: 40,
    borderRadius: 13.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  sendButtonText: {
    color: "#194A6E",
    fontSize: 10.8,
    fontWeight: "bold",
  },
});

export default PatitasRescate;
