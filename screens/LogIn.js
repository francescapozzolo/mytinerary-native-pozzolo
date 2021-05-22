import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, ImageBackground, View } from 'react-native'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

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

    const cargarUsuario = () => {
        props.loguearUsuario(usuario)
    }

    return (
        <ImageBackground source={require('../assets/fotoFormulario.jpg')} style={styles.contenedorRegistro}>
            <View style={styles.formulario}>
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
                <Text 
                        style={styles.tituloLogo}
                        onPress={() => cargarUsuario()}>Log in</Text>
            </View>
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
        width: '80%', 
        height: '70%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    tituloLogo:{
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        color: 'white',
        fontSize: 30
    },
    inputs: {
        fontFamily: 'Montserrat_200ExtraLight',
        width: '85%',
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        margin: 10

    },
})

const mapDispatchToProps = {
    loguearUsuario: authActions.loguearUsuario
}

export default connect(null, mapDispatchToProps)(LogIn) 