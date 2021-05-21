import React, { useState } from 'react'
import { Text, TextInput, ImageBackground, StyleSheet, View } from 'react-native'

const SignUp = () => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        'firstName': '',
        'lastName': '',
        'email': '', 
        'password': '',
        'image': '',
        'country': ''
    })

    const guardarDatosUsuario = (e, campo) => {
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: e
        })
    }

    const cargarNuevoUsuario = () => {
        
    }

    return (
        <ImageBackground source={require('../assets/fotoFormulario.jpg')} style={styles.contenedorRegistro}>
            <View style={styles.formulario}>
                <Text style={styles.tituloLogo}>Mytinerary</Text>
                <TextInput 
                    style={styles.inputs}
                    placeholder= 'Please enter your first name'
                    placeholderTextColor= 'white'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'firstName')}> 
                </TextInput>
                <TextInput
                    style={styles.inputs}
                    placeholder= 'Please enter your last name'
                    placeholderTextColor= 'white'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'lastName')}> 
                </TextInput>
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
                <TextInput 
                    style={styles.inputs}
                    placeholder= 'Please enter your photo'
                    placeholderTextColor= 'white'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'image')}> 
                </TextInput>
                <TextInput 
                    style={styles.inputs}
                    placeholder= 'Please enter your password'
                    placeholderTextColor= 'white'
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'country')}> 
                </TextInput>
                <Text 
                    style={styles.tituloLogo}
                    onPress={() => cargarNuevoUsuario()}>Sign up</Text>
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

export default SignUp