import React, { useEffect, useState } from 'react'
import { Text, TextInput, ImageBackground, StyleSheet, View, Pressable, Alert, TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const SignUp = (props) => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        'firstName': '',
        'lastName': '',
        'email': '', 
        'password': '',
        'userPic': '',
        'country': ''
    })
    const [paises, setPaises] = useState([])

    const fetchearPaises = async () => {
        const respuesta = await fetch ('https://restcountries.eu/rest/v2/all');
        const responseCountries = await respuesta.json();
        setPaises(responseCountries)
    }

    useEffect(() => {
        fetchearPaises()
    }, [])


    const guardarDatosUsuario = (e, campo) => {
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: e
        })
    }

    const cargarNuevoUsuario = async () => {
        if (Object.values(nuevoUsuario).some(value => value === "")) {
            Alert.alert('Some fields are empty, please complete them to continue')
        } else{
            const respuesta = await props.registrarNuevoUsuario(nuevoUsuario)
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
                <RNPickerSelect
                    onValueChange={(value) =>  guardarDatosUsuario(value, 'country')}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "Select your country", value: null }}
                    items={
                        paises.map(pais => {
                            return(
                                {label: pais.name, value: pais.name}
                            )
                        })
                    }
                />
                <TouchableHighlight onPress={() => cargarNuevoUsuario()}>
                    <Text 
                        style={styles.tituloLogo}
                        >Sign up<FontAwesome name="user-plus" size={24} color="white" /></Text>
                </TouchableHighlight>
                <Pressable onPress={() => props.navigation.navigate('login')}> 
                    <Text style={styles.redireccion}>Already have an account? Log In</Text>
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
    redireccion: {
        color: 'white',
        fontFamily: 'Montserrat_200ExtraLight',
        textAlign: 'center'
    }
})

const mapDispatchToProps = {
    registrarNuevoUsuario: authActions.registrarNuevoUsuario
}

export default connect(null, mapDispatchToProps)(SignUp) 
