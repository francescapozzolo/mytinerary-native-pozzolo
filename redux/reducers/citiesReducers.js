const initialState = {
    ciudades: [],
    ciudadesBuscadas: [],
    ciudad: []
}

const citiesReducer = (state = initialState , action) => {
    switch(action.type){
        case 'CARGAR_TODAS_CIUDADES':

            return {
                ciudades: action.payload,
                ciudadesBuscadas: action.payload
            }
        case 'FILTRAR_CIUDADES':
            const valorInput = action.payload.toLowerCase().trim()
            const busqueda = state.ciudades.filter(ciudad =>{
                return valorInput === (ciudad.nombreCiudad.toLowerCase().slice(0, valorInput.length))
            })
            return{
                ...state,
                ciudadesBuscadas:  busqueda
            }
        case 'CARGAR_UNA_CIUDAD':
            return{
                ...state,
                ciudad: action.payload
            }
        default: 
            return state
    }
}

export default citiesReducer