import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const LogIn = () => {
    return (
        <View style={styles.contenedorFormulario}>
            <TextInput 
                placeholder= 'Please enter your email'
                > 
            </TextInput>
            <TextInput 
                placeholder= 'Please enter your password'
                > 
            </TextInput>
            <Text>Log in</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorFormulario: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LogIn