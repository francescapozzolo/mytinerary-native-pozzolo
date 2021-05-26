import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, ImageBackground, View, Pressable, TouchableHighlight, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { Entypo } from '@expo/vector-icons';

const LogIn = (props) => {
    const [usuario, setUsuario] = useState({
        'email': '', 
        'password': ''
    })

    const guardarDatosUsuario = (e, campo) => {
        setUsuario({
            ...usuario,
            [campo]: e
        })
    }

    const cargarUsuario = async () => {
        if (Object.values(usuario).some(value => value === "")) {
            Alert.alert('Some fields are empty, please complete them to continue')
        } else{
            const respuesta = await props.loguearUsuario(usuario)
            if(respuesta.success){
                Alert.alert(`Welcome to Mytinerary`)
                props.navigation.navigate('home')
            }
        }
    }    

    return (
        <ImageBackground source={require('../assets/fotoFormulario.jpg')} style={styles.contenedorRegistro}>
            <ScrollView style={styles.formulario}>
                <Text style={styles.tituloLogo}>Mytinerary</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder= 'Please enter your email'
                    placeholderTextColor= 'white'
                    keyboardType= 'email-address'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'email')}> 
                </TextInput>
                <TextInput
                    style={styles.inputs}
                    placeholder= 'Please enter your password'
                    placeholderTextColor= 'white'
                    textContentType= 'newPassword'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'password')}> 
                </TextInput>
                <TouchableHighlight onPress={() => cargarUsuario()}> 
                    <Text style={styles.tituloLogo}> Log in<Entypo name="login" size={30} color="white" /></Text>
                </TouchableHighlight>
                <Pressable onPress={() => props.navigation.navigate('signup')}> 
                    <Text style={styles.redireccion}>New in Mytinerary? Sign Up</Text>
                </Pressable>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contenedorRegistro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formulario: {
        backgroundColor: 'rgba(191,147,147, 0.8)',
        width: '90%', 
        height: '60%',
        marginLeft: '5%',
        marginTop: '10%', 
        marginBottom: '5%',
        borderRadius: 10,
    },
    tituloLogo:{
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: '2%',
    },
    inputs: {
        fontFamily: 'Montserrat_200ExtraLight',
        width: '90%',
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        margin: '5%'
    },
    redireccion: {
        color: 'white',
        fontFamily: 'Montserrat_200ExtraLight',
        textAlign: 'center',
        marginRight: '5%'
    }
})

const mapDispatchToProps = {
    loguearUsuario: authActions.loguearUsuario
}

export default connect(null, mapDispatchToProps)(LogIn) 