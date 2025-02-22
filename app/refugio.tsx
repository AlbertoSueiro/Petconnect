import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView } from "react-native";
import { Link} from "expo-router";

export default function App() {

    const [menuVisible, setMenuVisible] = useState(false);
    return (
        
        <View style={estilos.main}>
    
            <View style={estilos.header}>
                <TouchableOpacity style={estilos.menuButton} onPress={() => setMenuVisible(true)}>
                    <Text style={estilos.menuText}>☰</Text>
                </TouchableOpacity>
                <Text style={estilos.companyName}>Refugio de Patitas</Text>
                <Image style={estilos.Logo} source={require("../assets/imagenes/ELEMENTOS_GENERALES/logo2.png")}/>
            </View>

            <Modal visible={menuVisible} animationType="slide" transparent>
                <View style={estilos.menuContainer}>
                    <View style={estilos.menuContent}>
                        <TouchableOpacity style={estilos.closeButton} onPress={() => setMenuVisible(false)}>
                            <Text style={estilos.closeText}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.menuItem}><Link style={estilos.menuTextItem} href="/Principal">Pagina Principal</Link></TouchableOpacity>
                        <TouchableOpacity style={estilos.menuItem}><Link style={estilos.menuTextItem} href="/mapa">Patitas al Rescate</Link></TouchableOpacity>
                        <TouchableOpacity style={estilos.menuItem}><Link style={estilos.menuTextItem} href="/comunidad">Comunidad Animal</Link></TouchableOpacity>
                        <TouchableOpacity style={estilos.menuItem}><Link style={estilos.menuTextItem} href="/refugio">Refugio Patitas</Link></TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems:'center' }}>
                <View style={estilos.cuadradoNaranaja}>
                    <Text style={[estilos.texto, { fontWeight: "bold" }]}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.</Text>
                    <Text style={estilos.texto}>Si no puedes cuidarlo hoy mañana y siempre no adoptes.</Text>
                    <Image style={estilos.perrosImg} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/perros.png")}/>
                </View>

                <View style={estilos.contenedorAnimales}>
                    <Text style={estilos.textoCat}>CATEGORÍAS</Text>
                    <Text style={estilos.textoBold}>Ver todo</Text>
                    
                    <View style={estilos.cuadradosContenedor}>
                        <View style={estilos.cuadrado}>
                            <Image style={estilos.animales} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/gatito animado.png")} />
                            <Text style={estilos.textoBold}>Gatos</Text>
                        </View>
                        <View style={estilos.cuadrado}>
                            <Image style={estilos.animales} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/perrito animado.png")} />
                            <Text style={estilos.textoBold}>Perros</Text>
                        </View>
                        <View style={estilos.cuadrado}>
                            <Image style={estilos.animales} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/conejito animado.png")} />
                            <Text style={estilos.textoBold}>Conejos</Text>
                        </View>
                    </View> 
                </View>

                <View style={estilos.contenedorPerros}>
                    <View style={estilos.cuadradosPerros}>
                        <View style={estilos.cuadradoPerro}>
                            <Link href={"/perros"}>
                                <Image style={estilos.perrera} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Pluto.png")} />
                                <Image style={estilos.like} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/like.png")} />
                                <View style={estilos.textoContainer}>
                                    <Text style={estilos.textoBold}>Pluto </Text>
                                    <Text style={estilos.textoBold}>Macho 1,5 años</Text>
                                </View>
                            </Link>
                        </View>
                        <View style={estilos.cuadradoPerro}>
                            <Link href={"/perros"}>
                                <Image style={estilos.perrera} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Afro y Shaggy.png")} />
                                <Image style={estilos.like} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/like.png")} />
                                <View style={estilos.textoContainer}>
                                    <Text style={estilos.textoBold}>Afro y Shaggy </Text>
                                    <Text style={estilos.textoBold}>Machos 3 meses</Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                    <View style={estilos.cuadradosPerros}>
                        <View style={estilos.cuadradoPerro}>
                            <Link href={"/perros"}>
                                <Image style={estilos.perrera} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Stelle.png")} />
                                <Image style={estilos.like} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/like.png")} />
                                <View style={estilos.textoContainer}>
                                    <Text style={estilos.textoBold}>Stelle </Text>
                                    <Text style={estilos.textoBold}>Hembra 1,5 años</Text>
                                </View>
                            </Link>
                        </View>
                        <View style={estilos.cuadradoPerro}>
                            <Link href={"/perros"}>
                                <Image style={estilos.perrera} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/Eros.png")} />
                                <Image style={estilos.like} source={require("../assets/imagenes/CATALOGO DE ADOPCIONES/like.png")} />
                                <View style={estilos.textoContainer}>
                                    <Text style={estilos.textoBold}>Eros </Text>
                                    <Text style={estilos.textoBold}>Macho 1 año</Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const estilos = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menuContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
    },
    menuContent: {
        backgroundColor: "#fff",
        width: "35%",
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
        fontSize: 12.0,
        color: "#194A6E",
        fontWeight: "bold",
    },
    Logo: {
        width: 45,
        height: 45,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor:'#194A6E',
        paddingHorizontal: 13.5,
        paddingVertical: 13.5,
    },
    menuButton: {
        padding: 4.5,
    },
    menuText: {
        fontSize: 18.9,
        color: "#F9F9F9",
    },
    companyName: {
        fontSize: 21.6,
        color: "#F9F9F9",
        fontFamily: "Roboto",
    },
    cuadradoNaranaja: {
        backgroundColor:'#FDB672',
        width: 213.75,
        height: 128.25,
        borderRadius: 10,
        marginTop: 13.5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
    texto: {
        fontSize: 10.8,
        color:'#000000',
        paddingHorizontal: 9,
        paddingVertical: 9,
    },
    perrosImg: {
        width: 196.75,
        height: 27,
        marginBottom: -10.8,
    },
    contenedorAnimales: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        marginTop: 22.5,
        flexWrap: "wrap",
    },
    textoCat: {
        fontSize: 16.2,
        color: "#194A6E",
    },
    cuadradosContenedor: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 9,
    },
    cuadrado: {
        backgroundColor: "#FDB672",
        width: 90,
        height: 90,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 4.5,
    },
    animales: {
        width: 65.25,
        height: 65.25,
    },
    textoBold: {
        fontSize: 10.8,
        color: "#194A6E",
        fontWeight: "bold",
    },
    contenedorPerros: {
        width: "92%",
        marginTop: 22.5,
    },
    cuadradosPerros: {
        flexDirection: "row",       
        justifyContent: "space-between",
        width: "100%",
        marginTop: 9,
        flexWrap: "wrap",          
    },
    cuadradoPerro: {
        backgroundColor: "#FDB672",
        width: "48%",
        height: 135,
        borderRadius: 10,
        padding: 9,
        marginBottom: 9,
    },
    textoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',             
    },
    perrera: {
        width: 130.5,
        height: 90,
        borderRadius: 10,          
    },
    like: {
        width: 27,
        height: 27,
        borderRadius: 225,
    },
});
    