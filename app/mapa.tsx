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
    backgroundColor:'#194A6E',
    alignItems: "center",
    
  },
  header: {
    backgroundColor:"#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 40,
    color: "#194A6E",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#194A6E",
    textAlign: "center",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#194A6E",
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuTextItem: {
    fontSize: 22,
    color: "#194A6E",
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor:'#194A6E',
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subText: {
    fontSize: 22,
    color: "#F9F9F9",
    textAlign: "center",
    marginTop: 10,
  },
  mainImage: {
    backgroundColor:'#194A6E',
    width: "100%",
    height: 700,
    resizeMode: "cover",
    marginVertical: 20,
  },
  roundedTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 20,
    width: "90%",
  },
  roundedImage: {
    width: 40,
    height: 60,
    marginRight: 15,
  },
  roundedText: {
    fontSize: 20,
    color: "#194A6E",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 100,
    borderColor: "#FDB672",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    textAlignVertical: "top",
    marginTop: 20,
  },
  sendButton: {
    backgroundColor: "#FD7712",
    width: 200,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "#194A6E",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PatitasRescate;