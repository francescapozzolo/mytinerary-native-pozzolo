import {createDrawerNavigator} from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import Cities from '../screens/Cities'
import City from '../screens/City'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import {WelcomeStack, HomeStack, CitiesStack} from './Stack'
import { FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, View, ViewComponent } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const drawer = createDrawerNavigator()
const DrawerNavigator = (props) => {

    useEffect(()=> {
        loginForzado()
    }, [])

    const loginForzado = async () => {
        try{
            if(!props.usuarioLogueado && AsyncStorage.getItem('token')){
                const datosUsuario = JSON.parse(AsyncStorage.getItem('usuarioLogueado'))
                const usuarioLS = {
                    token: AsyncStorage.getItem('token'),
                    ...datosUsuario
                }
                console.log(usuarioLS)
                props.loginForzado(usuarioLS)
              }
        }
        catch(error){console.log(error)}
    }
    

    return(
        <drawer.Navigator
            drawerStyle = { {
                backgroundColor : 'rgba(191,147,147, 0.8)', 
                width: 300
            }}>
                <drawer.Screen name="welcome" component={WelcomeStack}
                options={{
                    title: 'Mytinerary', 
                }}/>
                <drawer.Screen name="home" component={HomeStack} />
                <drawer.Screen name="signup" component={SignUp} />
                <drawer.Screen name="login" component={LogIn} />                
                <drawer.Screen name="cities" component={CitiesStack} />  
        </drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    imagenUsuario: {
        width: 50,
        height:50
    }
})

const mapStateToProps = state => {
    return {
        usuarioLogueado: state.authReducer.usuarioLogueado
    }
}
const mapDispatchToProps = {
    loginForzado: authActions.loginForzado
}
export default connect (mapStateToProps, mapDispatchToProps)(DrawerNavigator)