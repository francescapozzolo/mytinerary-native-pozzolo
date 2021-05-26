import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Text, TextInput, ImageBackground, TouchableHighlight, Alert } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { connect } from 'react-redux';
import itineraryActions from '../redux/actions/itinerariesActions';

const Itinerario = (props) => {

    const [usersLiked, setUsersLiked] = useState(props.itinerario.usersliked)
    const [colorear, setColorear] =useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(props.usuarioLogueado){
            if(usersLiked.includes(props.usuarioLogueado.email)){
                setColorear(true)
            } 
        } else {
            setColorear(false)
        }
    }, [])

    const likear = async () => {
        if(!props.usuarioLogueado){
            Alert.alert('You must be logged in to like an itinerary')
        } else {
            setLoading(false)
            setColorear(!colorear)
            const respuesta = await props.likearItinerario(props.usuarioLogueado.token, props.itinerario._id, )
            setLoading(true)
            setUsersLiked(respuesta.array)
            setColorear(respuesta.pintar)
        }  
    }

    return (
        <TouchableHighlight style={styles.itinerarioBanner} onPress={() => props.navigation.navigate('activities', props.itinerario._id, {comentarios: props.itinerario.comments})}>
            <ImageBackground source={{uri: `https://mytinerary-pozzolo.herokuapp.com/assets/${props.itinerario.photobanner}`}}style={styles.fotoItinerario}>
                <View  style={styles.detallesItinerario}>
                    <Text style={[styles.textoItinerarios, styles.titItinerario]}>{props.itinerario.title}</Text>
                    <Text style={styles.textoItinerarios}>{props.itinerario.authorName}</Text>
                    <View style={styles.resumenItinerario}>
                        <Text>{props.itinerario.duration} <Foundation name="clock" size={15} color="black" /></Text>
                        <Text style={{fontFamily: 'Montserrat_200ExtraLight'}}>Price: {Array(props.itinerario.price).fill(<Foundation name="dollar" size={15} color="black" />)}</Text>
                        <Text onPress={loading ? likear : null}>
                            <FontAwesome5 name="heart" size={15} style={{color: `${colorear ? "red" : "black"}`}} />
                        </Text>
                    </View>
                    <Text></Text>
                </View>
                
            </ImageBackground>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    itinerarioBanner:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    fotoItinerario: {
        width: '100%', 
        height: 150
    },
    detallesItinerario: {
        backgroundColor: 'rgba(255,255,255, 0.6)',
        height: '100%'  
    },
    titItinerario:{
        fontFamily: 'JuliusSansOne_400Regular',
        fontSize: 25
    },
    textoItinerarios: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat_200ExtraLight',
        paddingTop: '5%'
    },
    resumenItinerario: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '50%', 
        justifyContent: 'space-around'
    }
})

const mapStateToProps = state => {
    return {
        usuarioLogueado: state.authReducer.usuarioLogueado
    }
}

const mapDispatchToProps = {
    cargarItinerarios: itineraryActions.cargarItinerarios,
    likearItinerario: itineraryActions.likearItinerario
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerario)