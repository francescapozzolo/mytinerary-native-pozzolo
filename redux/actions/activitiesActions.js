import axios from "axios"

const activitiesActions = {
    cargarActividades: (idItinerario) => {
        return async (dispatch, getState) => {
            try{
                const respuesta = await axios.get('https://mytinerary-pozzolo.herokuapp.com/api/activities/'+ idItinerario)
                return respuesta.data.respuesta
            }
            catch(error){console.log(error)}
        }
    }
}

export default activitiesActions