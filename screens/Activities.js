import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, StyleSheet, View, ScrollView, TextInput, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import { FontAwesome } from '@expo/vector-icons';
import Comentario from '../componentes/Comentario'
import itineraryActions from '../redux/actions/itinerariesActions'

const Activities = (props) => {

    const idItinerario = props.route.params
    const [actividades, setActividades] = useState(null)
    const [mensaje, setMensaje] = useState({comments: '', token: ''})
    const [comentarios, setComentarios] = useState(props.comentarios)

    const itinerario = props.itinerarios.filter(itinerario => itinerario._id === idItinerario)
    
    useEffect(()=> {
        fetchearActividades()
    }, [])


    const fetchearActividades = async () => {
        try{
            const respuesta =  await props.cargarActividades(idItinerario)
            setActividades(respuesta)
        }
        catch(error){console.log(error)}
    } 

    const guardarMensaje = (e) => {
        setMensaje({
            ...mensaje,
            comments: e,
            token: props.usuarioLogueado.token
        })
    }

    const enviarMensaje = async () => {
        // setLoading(false)
        try{
            const respuesta = await props.archivarComentario(mensaje, idItinerario)
            setMensaje({comments: '', token: ''})
            setComentarios(respuesta)
            // setLoading(true)
        }
        catch(error){console.log(error)}
    }

    const modificarComentarioBD = async (comentarioEditado, idComentario) => {
        try{
            const respuesta = await props.modificarComentario(comentarioEditado, idComentario, idItinerario, props.usuarioLogueado.token)
            setComentarios(respuesta)
        }
        catch(error){console.log(error)}
    }

    const borrarComentarioBD = async (idComentario) => {
        try{
            const respuesta = await props.borrarComentario(idComentario, idItinerario, props.usuarioLogueado.token)
            setComentarios(respuesta)
        }
        catch(error){console.log(error)}
    }

    const renderItem = ({item }) => {
        return(
            <ImageBackground style={styles.slide} 
                source={{uri: `https://mytinerary-pozzolo.herokuapp.com/assets/${item.picture}`}}>
                    <Text style={styles.titSlide}>{item.tittle}</Text>
            </ImageBackground>    
        )
    }

    return (
        <View style={styles.contenedorActividades}>
            <Text style={styles.titSlide}>Activities</Text>
            <Carousel 
                layout={'stack'}
                data={actividades}
                sliderWidth={350}
                itemWidth={250}
                renderItem={renderItem}
                loop= {true}
                autoplay= {true}
            />
            <Text style={styles.titSlide}>Comments</Text>
            <ScrollView style={styles.contenedorComentarios}>
                {itinerario[0].comments.length > 0 
                ?
                itinerario[0].comments.map(comentario => {
                    return (
                        <Comentario comentario={comentario}  modificarComentario={modificarComentarioBD} borrarComentario={borrarComentarioBD}/>
                    )
                })
                : <Image style={styles.sinMensajes} source={{uri: 'https://mytinerary-pozzolo.herokuapp.com/assets/dejatumsj.png'}}/>}
            
            </ScrollView>
            <View style={styles.inputComentarios}>
                <TextInput
                placeholder= {props.usuarioLogueado ? 'Send your comment' : 'You must be logged in to comment'}
                placeholderTextColor= 'black'
                editable={props.usuarioLogueado ? true : false}
                onChangeText={(e) => guardarMensaje(e)}/>
                <FontAwesome name="send" size={24} color="black" onPress={enviarMensaje}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorActividades: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
        backgroundColor: 'black'
    },
    slide: {
        width: '100%', 
        height: '90%',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titSlide:{
        color: 'white',
        fontFamily: 'JuliusSansOne_400Regular',
        fontSize: 20
    },
    contenedorComentarios:{
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        marginTop: '2%',
    },
    inputComentarios: {
        flexDirection: 'row', 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        padding: '3%', 
        backgroundColor: 'white'
    },
    sinMensajes:{
        width: 200,
        height: 100,
        alignSelf: 'flex-end',
        marginTop: 80
    }
})

const mapStateToProps = state => {
    return{
        itinerarios: state.itinerariesReducer.itinerarios,
        usuarioLogueado: state.authReducer.usuarioLogueado
    }   
}

const mapDispatchToProps = {
    cargarActividades: activitiesActions.cargarActividades,
    archivarComentario: itineraryActions.archivarComentario,
    modificarComentario: itineraryActions.modificarComentario,
    borrarComentario: itineraryActions.borrarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities) 
