import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Carrusel from '../componentes/Carrusel'
import { FontAwesome5 } from '@expo/vector-icons';


const Home = (props) => {
    return (
        <>
        <ImageBackground source={require('../assets/portada.jpg')} style={styles.contenedorPortada}>
            <Text style={styles.texto}>Discover the most spectacular places around the world</Text>
            <Text style={[styles.texto, styles.titLogo]}><FontAwesome5 name="map-marked" size={35} color="white" />Mytinerary</Text>
            <Carrusel />
            <TouchableOpacity onPress={() => props.navigation.navigate('cities')} style={styles.boton}>
                <Text style={styles.texto}>GO TO CITIES</Text>
            </TouchableOpacity>
        </ImageBackground>
        
        </>
    )
}

const styles = StyleSheet.create({
    contenedorPortada: {
        width: '100%',
        height: '110%',
        alignItems: 'center',
        paddingTop: 35
    },
    texto: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat_200ExtraLight',
        width: '70%',
        padding: 10
    }, 
    titLogo: {
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        fontSize: 30,
        marginBottom: '4%'
    },
    boton: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 2,
        borderRadius: 5,
        marginBottom: '20%'
        
    }
})

export default Home