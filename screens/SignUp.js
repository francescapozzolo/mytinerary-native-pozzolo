import React, { useState } from 'react'
import { Text, TextInput, ImageBackground, StyleSheet, View, Pressable, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';

const SignUp = (props) => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        'firstName': '',
        'lastName': '',
        'email': '', 
        'password': '',
        'userPic': '',
        'country': ''
    })

    const guardarDatosUsuario = (e, campo) => {
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: e
        })
    }


    const cargarNuevoUsuario = () => {
        if (Object.values(nuevoUsuario).some(value => value === "")) {
            Alert.alert('Some fields are empty, please complete them to continue')
        } else{ 
            props.registrarNuevoUsuario(nuevoUsuario)
            if (response) {
                response.details.map(error => setMistakes((prevState) => {
                    return { ...prevState, [error.context.label]: error.message }
                }))
            }
        }    
    }

    return (
        <ImageBackground source={require('../assets/fotoFormulario.jpg')} style={styles.contenedorRegistro}>
            <ScrollView style={styles.formulario}>
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
                    onChangeText= {(e)=> guardarDatosUsuario(e, 'userPic')}> 
                </TextInput>
                <Pressable onPress={() => cargarNuevoUsuario()}>
                    <Text 
                        style={styles.tituloLogo}
                        >Sign up<FontAwesome name="user-plus" size={24} color="white" /></Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('login')}> 
                    <Text>Already have an account? Log In</Text>
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
        height: '95%',
        marginLeft: '5%',
        marginTop: '2%', 
        borderRadius: 10,
    },
    tituloLogo:{
        fontFamily: 'ShadowsIntoLightTwo_400Regular',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: '4%'
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
})

const mapDispatchToProps = {
    registrarNuevoUsuario: authActions.registrarNuevoUsuario
}

export default connect(null, mapDispatchToProps)(SignUp) 
