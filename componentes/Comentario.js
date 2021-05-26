import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Comentario = (props) => {

    const [comentarioEditado, setComentarioEditado] = useState(props.comentario.comment)
    const [visible, setVisible] = useState(false)

    const alerta = () => {
        Alert.alert('Are you sure you want to delete this message?',
        'Are you sure', 
        [
            {text: 'Yes', onPress: () => {
                props.borrarComentario(props.comentario._id)
            }},
            {text: 'No'}
        ])
    }
    return (
        <View style={styles.contenedorComentario}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: props.comentario.userId.userPic }} style={styles.fotoUsuario}></Image>
                <View>
                    <Text style={styles.nombreUser}>{props.comentario.userId.firstName} {props.comentario.userId.lastName}</Text>
                    {visible 
                    ? <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput value={comentarioEditado} onChangeText={(e)=> setComentarioEditado(e)}/>
                        <FontAwesome name="send" size={15} color="black" onPress={()=> {props.modificarComentario(comentarioEditado, props.comentario._id); setVisible(false)}}/>
                      </View>
                    : <Text style={styles.comentario}>{props.comentario.comment}</Text>}
                    
                </View>
            </View>
            {props.usuarioLogueado
            ? props.usuarioLogueado.email === props.comentario.userId.email
                ? 
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="edit" size={15} color="black" style={{paddingRight: '5%'}} onPress={() => setVisible(true)}  />
                    <FontAwesome name="trash-o" size={15} color="black" onPress={alerta}/>
                </View>
                : null
            : null}
            
        </View>   
    )
}

const styles = StyleSheet.create({
    contenedorComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '2%',
        justifyContent: 'space-between'
    },
    fotoUsuario: {
        width: 30,
        height: 30,
        marginRight: '3%',
        borderRadius: 20
    },
    nombreUser: {
        fontFamily: 'JuliusSansOne_400Regular'
    },
    comentario: {
        fontFamily:'Montserrat_200ExtraLight'
    }
})

const mapStateToProps = state => {
    return{
        usuarioLogueado: state.authReducer.usuarioLogueado
    }   
}

export default connect (mapStateToProps)(Comentario) 