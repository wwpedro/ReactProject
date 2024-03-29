import React from "react";
import { Image, ScrollView, StyleSheet, Text, View,Linking } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Summer from "../../assets/Summer/summer.jpg"


export default function Conteudos() {

    const navigation = useNavigation();
    
    let [fontsLoaded] = useFonts({
        Lora_400Regular,
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
      
        <ScrollView style={estilos.scrow}>
            <View style={estilos.tela}>
                <View style={estilos.capa}>
                    <Image  source={Summer} style={estilos.imagemCapa} />
                    <View style={estilos.imagemCapaConteudo}>
                        <IconFontAwesome onPress={()=>navigation.goBack()} name="arrow-left" size={20} color="#ffffff" style={estilos.classificacaoEstrela}></IconFontAwesome>
                    </View>    
                </View>
                <View style={estilos.conteudoView}>
                    <View style={estilos.sobreFilme}>
                        <Text style={estilos.titulo}>
                            Summer of Soul
                        </Text>
                        <View style={estilos.texto}>            
                            <Text style={estilos.textoConteudo}>
                                <Text style={estilos.primeiraLetra}>S</Text>
                                ummer of Soul é parte filme musical, parte registro 
                                histórico criado em torno de um evento épico que celebrou
                                 a história, cultura e moda negra. Ao longo de seis 
                                 semanas no verão de 1969, a apenas 160 quilômetros 
                                 ao sul de Woodstock, o Harlem Cultural Festival foi filmado 
                                 no Mount Morris Park (agora Marcus Garvey Park). O filme captura 
                                 um empolgante momento cultural nos Estados Unidos, embora 
                                 subestimado historicamente. Entrevistas com artistas 
                                 que participaram do evento são intercaladas com 
                                 apresentações de shows nunca antes vistos 
                                 de Stevie Wonder, Nina Simone, Sly and the 
                                 Family Stone, Gladys Knight and the Pips, Mahalia Jackson, 
                                 B.B. King, The 5th Dimension e muito outros. O lendário Festival 
                                 Cultural Harlem 1969, celebrou a música e a cultura afro-americana 
                                 e promoveu o orgulho e a unidade negra, naquele momento do país.
                            </Text>
                            <MaterialCommunityIcons name="movie-filter" size={30} color="blck" onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=vVU2ixNLOt8');}} ></MaterialCommunityIcons>
                        </View>
                    </View>

                    <View style={estilos.elenco}>
                        <Text style={estilos.tituloElenco}>Personagens</Text>
                        <View style={estilos.elencoScrowll}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={estilos.personagem}>
                                    <Image  source={Summer} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Summer of Soul</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Summer} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Summer of Soul</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Summer} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Summer of Soul</Text>
                                </View>
                                <View style={estilos.personagem}>
                                    <Image  source={Summer} style={estilos.elencoImg}/>
                                    <Text style={estilos.pessoaElenco}>Summer of Soul</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={estilos.classificacao}>
                        <Text style={estilos.titulo}>Classificação</Text>
                        <View style={estilos.classificacaoEstrelas}>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                            <IconFontAwesome name="star" size={30} color="black" style={estilos.classificacaoEstrela}></IconFontAwesome>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    scrow:{
        backgroundColor: "#ffffff",
    },
    tela:{
        alignItems:"center",
        flexDirection:"column",
        flex:1,
        justifyContent:"center"
    },
    
    //capa
    capa:{
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 50,
        flexDirection:"row",
        marginTop:"10%"
    },
    imagemCapa:{
        width: "100%",
        height:300,
        borderBottomLeftRadius: 70,
    },
    imagemCapaConteudo:{
        height: 300,
        width: "40%",
        borderBottomLeftRadius: 50,
        position:"absolute",
        marginTop: 70,
        marginLeft:10 
    },
    botao:{
        padding:20,
        margin:30,
        backgroundColor: "#D4D4D4"
    },

    //conteudo de texto
    conteudoView:{
        flexDirection:"column",
        alignItems:"center",
        width:"100%"
    },
    sobreFilme:{
        flexDirection:"column",
        alignItems:"center"
    },
    titulo:{
        fontSize: 40,
        fontFamily:"Lora_400Regular"
    },
    texto:{
        flexDirection: "column",
        width:"80%",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    primeiraLetra:{
        height:50,
        width:50,
        fontSize:50,
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        fontFamily:"Lora_400Regular"
    },
    textoConteudo:{
        fontSize:15,
        fontFamily:"Lora_400Regular"
    },


    //elenco
    elenco:{
        marginTop:30,
        height:"30%",
        width:"100%",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    tituloElenco:{
        color:"#ffffff",
        fontSize: 40,
        fontFamily:"Lora_400Regular"
    },
    pessoaElenco:{
        color:"#ffffff",
        fontSize:15,
        fontFamily:"Lora_400Regular"
    },
    elencoScrowll:{
        flexDirection:"row",
        paddingTop: 10,
        padding:20,
        paddingHorizontal:0
        
    },
    elencoImg:{
        width: 150,
        height: 200,
        margin:10,
    },
    personagem:{
        alignItems:"center"
    },

        
    classificacao:{
        marginVertical:20
    },
    classificacaoEstrelas:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:30
    },
    classificacaoEstrela:{
        marginHorizontal:10
    }
})