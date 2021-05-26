import axios from 'axios'

const itineraryActions = {

    cargarItinerarios: (id) => {
        return (dispatch, getState) => {
            axios.get('https://mytinerary-pozzolo.herokuapp.com/api/itineraries/'+ id)
            .then(data => dispatch({
                type: 'CARGAR_ITINERARIOS',
                payload: data.data.respuesta
            }))
            .catch(error => console.log(error))
        }
    },

    archivarComentario: (mensaje, id) => {
        var comentario = mensaje.comments
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.post('https://mytinerary-pozzolo.herokuapp.com/api/itineraries/comments/'+ id, {comentario}, {
                    headers: {
                        'Authorization': 'Bearer ' + mensaje.token
                    },  
                })
                dispatch({
                    type: 'ACTUALIZAR_ITINERARIOS',
                    payload: respuesta.data.respuesta
                })
                return respuesta.data.respuesta.comments
            }
            catch(error){console.log(error)}
        }
    },

    modificarComentario: (comentario, idComentario, idItinerario, token) => {
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.put('https://mytinerary-pozzolo.herokuapp.com/api/itineraries/comments/'+ idItinerario, {comentario, idComentario}, {
                    headers:{
                        'Authorization': 'Bearer ' + token
                    }
                })
                dispatch({
                    type: 'ACTUALIZAR_ITINERARIOS',
                    payload: respuesta.data.respuesta
                })
               return respuesta.data.respuesta.comments
            } 
            catch(error){console.log(error)}
        }
    },

    borrarComentario: (idComentario, idItinerario, token) => {
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.delete('https://mytinerary-pozzolo.herokuapp.com/api/itineraries/comments/'+ idItinerario, {
                    headers:{
                        'Authorization': 'Bearer ' + token
                    },
                    data: {
                        idComentario: idComentario
                    }
                })
                dispatch({
                    type: 'ACTUALIZAR_ITINERARIOS',
                    payload: respuesta.data.respuesta
                })
                return respuesta.data.respuesta.comments
            } 
            catch(error){console.log(error)}
        }
    },

    likearItinerario: (token, idItinerario) =>{
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.put('https://mytinerary-pozzolo.herokuapp.com/api/itineraries/likes',{idItinerario}, {
                    headers:{
                        'Authorization': 'Bearer ' + token
                    }
                })
                dispatch({
                    type: 'ACTUALIZAR_ITINERARIOS',
                    payload: respuesta.data.respuesta.itinerarios
                })
                return respuesta.data.respuesta
            } 
            catch(error){console.log(error)}
        }
    }
}

export default itineraryActions