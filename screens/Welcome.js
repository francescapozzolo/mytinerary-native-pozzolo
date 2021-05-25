import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'

const Welcome = (props) => {

    return(
        <ImageBackground source={require('../assets/portada.jpg')} style={styles.contenedorPortada}>
            <View style={styles.callToAction}>
                <Text style={styles.tituloPortada}>Welcome to</Text>
                <Text style={styles.tituloLogo}> Mytinerary</Text>
                <Pressable onPress={() => props.navigation.navigate('home')}>
                    <Text>Lets start</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contenedorPortada: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    callToAction: {
        backgroundColor: 'rgba(191,147,147, 0.7)', 
        width: 250,
        height: 250,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloPortada:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat_200ExtraLight'
    },
    tituloLogo: {
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        color:'white',
        fontSize: 40,
        textAlign: 'center'
    }
})

export default Welcome