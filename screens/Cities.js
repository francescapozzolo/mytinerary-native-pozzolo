import React, { useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View, Image, ImageBackground, StatusBar, TextInput, Pressable, TouchableHighlight } from "react-native"
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import { FontAwesome5 } from '@expo/vector-icons';

const Cities = (props) => {
    const [Loading, setLoading] = useState(true)

    useEffect(()=>{
        props.cargarCiudades(),
        setLoading(false)
    }, [])
    
    return(
        <View style={styles.contenedorCities}>
             <Text style={[styles.texto, styles.titLogo]}><FontAwesome5 name="map-marked" size={35} color="white" />Mytinerary</Text>
            <Text style={[styles.texto, styles.callToAction]}>Find your next destination</Text>
            <View style={styles.buscador}>
                <FontAwesome5 name="search" size={13} color="white" />
                <TextInput 
                    placeholder= 'search cities'
                    placeholderTextColor= 'white'
                    onChangeText={(e) => props.filtrarCiudades(e)}
                    style={[styles.texto, styles.inputBuscador]}/>
            </View>
            
            <ScrollView style={styles.contenedorFotosCiudades}>
                {Loading 
                    ? <Text style={styles.texto}>Loading</Text>
                    : (props.todasCiudades.length > 0 )   
                        ? props.todasCiudades.map(ciudad => {
                            return(
                                <>
                                    <TouchableHighlight onPress={() => props.navigation.navigate('city', ciudad._id)}>
                                        <ImageBackground key={ciudad._id} source={{uri: `https://mytinerary-pozzolo.herokuapp.com/assets/${ciudad.foto}`}} imagen style={styles.portaFoto}
                                        >
                                            <Text key={ciudad.nombreCiudad} style={styles.tituloImagen}>{ciudad.nombreCiudad}</Text>
                                        </ImageBackground>
                                    </TouchableHighlight>
                                </>
                            )
                         })
                         : <ImageBackground style={styles.sinCoincidencias} source={{uri: "https://mytinerary-pozzolo.herokuapp.com/assets/mapa.jpg"}}><Text style={styles.textoSinCoincidencias}>Oops! We don't have any city that matches your search! Try another one!</Text></ImageBackground>
                         }
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contenedorCities: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    titLogo:{
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        fontSize: 30,
        marginTop: '5%'
    },
    callToAction: {
        fontFamily:'JuliusSansOne_400Regular',
        marginTop: '2%'
    },
    buscador: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        width: '80%',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },
    portaFoto: {
        width: 300,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%', 
        borderRadius: 8
    },
    texto: {
        color: 'white',
        fontFamily:'Montserrat_200ExtraLight',
    },
    inputBuscador: {
        width: '80%',
        marginLeft: '5%'
    },
    tituloImagen: {
        color: 'white',
        fontFamily: 'JuliusSansOne_400Regular',
        textAlign: 'center',
        fontSize: 35
    },
    sinCoincidencias:{
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        padding: '5%',
        alignSelf: 'center',
    },
    textoSinCoincidencias: {
        fontFamily: 'Montserrat_200ExtraLight'
    }
})

const mapStateToProps = state => {
    return{
        todasCiudades: state.citiesReducer.ciudadesBuscadas
    }
}
const mapDispatchToProps = {
    cargarCiudades: citiesActions.uploadAllCities,
    filtrarCiudades: citiesActions.filterCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)