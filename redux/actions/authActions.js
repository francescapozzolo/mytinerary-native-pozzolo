import axios from 'axios'

const authActions = {
    registrarNuevoUsuario: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.post('https://mytinerary-pozzolo.herokuapp.com/api/users/signup', nuevoUsuario)
                if(!respuesta.data.success){
                    return respuesta.data.errores || respuesta.data.error
                } 
                dispatch({
                    type: "USER_SIGNUP",
                    payload: respuesta.data.respuesta 
                })
                return respuesta.data
            }         
            catch(error){
                console.log(error)
            } 
        }
    }, 
    loguearUsuario: (usuario) => {
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.post('https://mytinerary-pozzolo.herokuapp.com/api/users/login', usuario)
                console.log(respuesta)
                if(!respuesta.data.success){
                    console.log("Incorrect username or password")
                } else {
                    dispatch({
                        type: "USER_SIGNUP",
                        payload: respuesta.data.success ? respuesta.data.respuesta : null,    
                    })             
                } 
                return respuesta.data
            }
            catch(error){
                console.log(error)
            }
        }
    },
    
    desloguearUsuario: () => {
        return (dispatch, getState) => {
            dispatch({type: "USER_LOGOUT"})
            // toast.info("Hope see you soon")
        }
    },

    // loginForzado: (usuarioLocalStorage) => {
    //     return async (dispatch, getState) => {
    //         try{
    //             await axios.get('https://mytinerary-pozzolo.herokuapp.com/api/users/loginforzado', {
    //                 headers: {
    //                     'Authorization': 'Bearer ' + usuarioLocalStorage.token
    //                 }
    //             })
    //             dispatch({
    //                 type: "USER_SIGNUP",
    //                 payload: usuarioLocalStorage,
    //             })
    //         }
    //         catch(error){
    //             console.log(error)
    //         }
    //     }
    // }
}

export default authActions