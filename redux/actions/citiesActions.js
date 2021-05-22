import axios from "axios"

const citiesActions = {
    uploadAllCities: () => {
        return (dispatch, getState) => {
            axios.get('https://mytinerary-pozzolo.herokuapp.com/api/cities')
            .then(data => dispatch({
                type: 'CARGAR_TODAS_CIUDADES',
                payload: data.data.respuesta
            }))
            .catch(error => console.log(error))
        }   
    },
    
    // uploadOneCity: (id) => {
    //     return (dispatch, getState) => {
    //         axios.get('https://mytinerary-pozzolo.herokuapp.com/api/city/' + id)
    //         .then(data => dispatch({
    //             type: 'UPLOAD_ONE_CITY',
    //             payload: data.data.respuesta
    //         }))
    //         .catch(error => console.log(error))
    //     }   
    // },

    filterCity: (valorInput) => {
        return (dispatch, getState) => {
            dispatch({
                type: 'FILTRAR_CIUDADES',
                payload: valorInput
            })
        }
    }
}

export default citiesActions