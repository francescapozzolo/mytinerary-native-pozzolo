import React, { useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View, Image, ImageBackground, StatusBar, TextInput } from "react-native"
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) => {

    const [ciudades, setCiudades] = useState([])

    useEffect(()=>{
        props.cargarCiudades()
    }, [])
    
    return(
        <View style={styles.contenedorCities}>
            <Text>Find your next destination</Text>
            <TextInput 
                placeholder= 'search cities'
                onChangeText={(e) => props.filtrarCiudades(e)}/>
            <ScrollView style={styles.contenedorFotosCiudades}>
            {props.todasCiudades.map(ciudad => {
                return(
                    <>
                        <ImageBackground key={ciudad._id} source={{uri: `https://mytinerary-pozzolo.herokuapp.com/assets/${ciudad.foto}`}} imagen style={styles.portaFoto}>
                            <Text style={styles.tituloImagen}>{ciudad.nombreCiudad}</Text>
                        </ImageBackground>
                    </>
                )
            })}
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contenedorCities: {
        flex: 1,
        marginTop: '9%',
        alignItems: 'center',
    },
    portaFoto: {
        width: 300,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%', 
        borderRadius: 8
    }, 
    tituloImagen: {
        color: 'white',
        fontFamily: 'JuliusSansOne_400Regular',
        textAlign: 'center',
        fontSize: 35
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