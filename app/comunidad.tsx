import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal} from "react-native";
import { Link} from "expo-router";

const comunidad = () => {
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
                        <TouchableOpacity style={styles.menuItem}>
                            <Link style={styles.menuTextItem} href="/Principal">Pagina Principal</Link>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Link style={styles.menuTextItem} href="/mapa">Patitas al Rescate</Link>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/comunidad">Comunidad Animal</Link></TouchableOpacity>
                        {/* falta link a lo de las adopciones */}
                        <TouchableOpacity style={styles.menuItem}><Link style={styles.menuTextItem} href="/">Refugio Patitas</Link></TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.textBlock}>
                <View style={styles.titleContainer}>
                    <Image source={require("../assets/imagenes/FORO DE COMUNIDAD/aviso.png")} style={styles.smallLogo} />
                    <Text style={styles.title}>PATITAS EN MARCHA (eventos)</Text>
                </View>
                <Text style={styles.paragraph}>Descubre eventos solidarios creados por la
                    comunidad: actividades deportivas, caminatas
                    y mucho más. 🐾 ❤ Cada participación suma
                    para ayudar a los animales que más lo
                    necesitan. ¡Únete y sé parte del cambio!
                </Text>
            </View>

            <View style={styles.textBlock2}>
                <Text style={styles.title}>TEMAS DE DISCUSIÓN</Text>
                <View style={styles.subBlock}>
                    <Text style={styles.subText}>GUIAS DE ALIMENTACION B.A.R.F. PARA TU ANIMAL
                    </Text>
                    <Image source={require("../assets/imagenes/FORO DE COMUNIDAD/bocadillotexto.png")} style={styles.icon} />
                    <Text style={styles.number}>10</Text>
                </View>
                <View style={styles.subBlock}>
                    <Text style={styles.subText}>CONSEJOS PARA SOBRELLEVAR EL CALOR CON TU MASCOTA</Text>
                    <Image source={require("../assets/imagenes/FORO DE COMUNIDAD/bocadillotexto.png")} style={styles.icon} />
                    <Text style={styles.number}>20</Text>
                </View>
                <View style={styles.subBlock}>
                    <Text style={styles.subText}>CÓMO EMPEZAR A ADIESTRAR A TU
                        MASCOTA.</Text>
                    <Image source={require("../assets/imagenes/FORO DE COMUNIDAD/bocadillotexto.png")} style={styles.icon} />
                    <Text style={styles.number}>30</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerText}>+NUEVO</Text>
                </TouchableOpacity>
            </View>

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
        fontSize: 50,
        color: "white",
    },
    headerTitle: {
        fontSize: 50,
        color: "white",
    },
    logo: {
        width: 80,
        height: 80,
    },
    smallLogo: {
        width: 50,
        height: 50,
        marginRight: 10,
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
    title: {
        fontSize: 45,
        color: "#194A6E",
        alignContent: "center",
        textAlign: "center",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        textAlign: "center"
    },
    closeButton: {
        alignSelf: "flex-end",
        padding: 10,
    },
    menuItem: {
        paddingVertical: 15,
    },
    menuTextItem: {
        fontSize: 24,
        color: "#194A6E",
        fontWeight: "bold",
    },
    closeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#194A6E",
    },
    textBlock: {
        width: "90%",
        backgroundColor: "#FDB672",
        padding: 50,
        borderRadius: 50,
        marginVertical: 25,
    },
    textBlock2: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        flex: 1,
    },
    paragraph: {
        fontSize: 26,
        color: "black",
        textAlign: "center"
    },
    subBlock: {
        flexDirection: "row",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#B5D6ED",
        borderRadius: 8,
        marginVertical: 10,
        width: "100%",
    },
    icon: {
        width: 40,
        height:40,
        marginRight: 5,
    },
    number: {
        fontSize: 30,
        fontWeight: "bold",
        marginRight: 10,
    },
    subText: {
        fontSize: 30,
        flex: 1,
    },
    footer: {
        width: "100%",
        backgroundColor: "#194A6E",
        paddingVertical: 60,
        alignItems: "center",
    },
    footerButton: {
        backgroundColor: "#FD7712",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    footerText: {
        fontSize: 30,
    },
});

export default comunidad;
