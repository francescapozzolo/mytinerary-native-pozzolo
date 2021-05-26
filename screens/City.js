import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import Itinerario from '../componentes/Itinerario'
import itineraryActions from '../redux/actions/itinerariesActions'

const City = (props) => {

    const [ciudad, setCiudad] = useState([])
    const idCiudad = props.route.params
    
    useEffect(() => {
        setCiudad(
            props.ciudades.find(ciudad => ciudad._id === idCiudad)
        )
        props.fetchearItinerarios(idCiudad)
    },[])
   
    return (
        <>
            <ImageBackground source={{uri: `https://mytinerary-pozzolo.herokuapp.com/assets/${ciudad.foto}`}} style={styles.portada}>
                <Text style={styles.textoPortada}>Welcome to {ciudad.nombreCiudad}</Text>
            </ImageBackground>
            <ScrollView style={styles.contenedorItinerarios}>
                {props.itinerarios.map(itinerario => {
                    return(
                        <Itinerario key={itinerario._id} itinerario={itinerario} navigation={props.navigation}/>
                    )
                })}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    portada: {
        width: '100%',
        height: 100,
        alignItems: 'center'
    },
    textoPortada: {
        color: 'white',
        fontFamily: 'JuliusSansOne_400Regular',
        marginTop: '12%'
    },
    contenedorItinerarios: {
        width: '100%',
        marginTop: 20,
    }
})

const mapStateToProps = state => {
    return{
        ciudades: state.citiesReducer.ciudades,
        itinerarios: state.itinerariesReducer.itinerarios
    }
}

const mapDispatchToProps = {
    fetchearItinerarios: itineraryActions.cargarItinerarios
}

export default connect(mapStateToProps, mapDispatchToProps)(City)