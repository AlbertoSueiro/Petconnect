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
                    <Text style={estilos.texto}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.</Text>
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
Logo: {
    width: 100,
    height: 100,
},
header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor:'#194A6E',
    paddingHorizontal: 30,
    paddingVertical:30,
  },
menuButton: {
    padding: 10,
  },
menuText: {
    fontSize: 42,
    color: "#F9F9F9",
  },
companyName: {
    fontSize: 48,
    color: "#F9F9F9",
    fontFamily: "Roboto",
  },
cuadradoNaranaja:{
    backgroundColor:'#FDB672',
    width: 475,
    height: 285,  
    borderRadius:20,
    marginTop: 30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center', 
},
texto:{
    fontSize: 22,
    color:'#000000',
    paddingHorizontal:20,
    paddingVertical:20
},
perrosImg:{
    width:435,
    height:60,
    marginBottom:-25,
},
contenedorAnimales: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
    flexWrap: "wrap",
},
textoCat:{
    fontSize: 36,
    color: "#194A6E",
},
cuadradosContenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20, 
},
cuadrado: {
    backgroundColor: "#FDB672",
    width: 200,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
},
animales: {
    width: 145,
    height: 145,
},
textoBold:{
    fontSize: 24,
    color: "#194A6E",
    fontWeight: "bold",
},

contenedorPerros: {
    width: "90%",
    marginTop: 50,
},
cuadradosPerros: {
    flexDirection: "row",       
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    flexWrap: "wrap",          
},
cuadradoPerro: {
    backgroundColor: "#FDB672",
    width: "48%",           
    height: 300,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,           
},
textoContainer: {
    flexDirection: 'column',    
    justifyContent: 'center',  
    alignItems: 'center',       
    position: 'absolute',                    
    left: 10,                   
    right: 10,                  
},
perrera: {
    width: 290,               
    height: 200,
    borderRadius: 20,          
},
like: {
    width: 60,               
    height: 60,
    borderRadius: 500,    
    bottom:20,
    left:250,
},
});

