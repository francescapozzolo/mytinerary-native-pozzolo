import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

const Carrusel = (props) => {

    const regiones = [
        {region: 'asia1', id: '1', nombre: 'Bangkok', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/bangkok.jpg'},
         {region: 'asia2',id: '2', nombre: 'Singapore', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/singapur.jpg'},
         {region: 'asia3',id: '3', nombre: 'Bali', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/bali.jpg'},
         {region: 'asia4',id: '4', nombre: 'Siem Reap', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/siemreap.jpg'},

        {region: 'europa1',id: '5', nombre: 'Rome', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/roma.jpg'},
         {region: 'europa2',id: '6', nombre: 'London', foto: 'https://mytinerary-pozzolo.herokuapp.com/assets/london.jpg'},
         {region: 'europa3',id: '7', nombre: 'Bacerlona', foto: 'https://mytinerary-pozzolo.herokuapp.com/assets/barcelona.jpg'},
         {region: 'europa4',id: '8', nombre: 'Paris', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/paris.jpg'},

        {region: 'america1',id: '9', nombre: 'New York', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/newyork.jpg'},
         {region: 'america2',id: '10', nombre: 'Cartagena', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/cartagena.jpg'},
         {region: 'america3',id: '11', nombre: 'Havana', foto: 'https://mytinerary-pozzolo.herokuapp.com/assets/havana.jpg'},
         {region: 'america4',id: '12', nombre:'Playa del Carmen', foto:'https://mytinerary-pozzolo.herokuapp.com/assets/playadelcarmen.jpg'}
    ]
    
    const renderItem = ({item }) => {
        return(
            <ImageBackground style={styles.slide} 
                source={{uri: item.foto}}>
                    <Text style={styles.titSlide}>{item.nombre}</Text>
            </ImageBackground>    
        )
    }

    const ciudadesRandom = props.ciudades[Math.floor(Math.random()* props.ciudades.length)]
    return (
        <Carousel 
            layout={'default'}
            data={regiones}
            sliderWidth={350}
            itemWidth={250}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    slide: {
        width: '100%', 
        height: '80%',
        marginTop: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titSlide: {
        color: 'white',
        fontFamily: 'JuliusSansOne_400Regular',
    }
})

const mapStateToProps= state => {
    return {
        ciudades: state.citiesReducer.ciudades
    }
}

export default connect(mapStateToProps)(Carrusel)