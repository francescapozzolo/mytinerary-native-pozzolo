const initialState = {
    itinerarios: []
}

const itinerariesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CARGAR_ITINERARIOS':
            return{
                ...state,
                itinerarios: action.payload
            }
        case 'ACTUALIZAR_ITINERARIOS':
            return{
                ...state,
                itinerarios: state.itinerarios.map(itinerario => itinerario._id === action.payload._id ? action.payload : itinerario)
            }
        case 'CARGAR_COMENTARIO':
            return{
                state
            }
        default: 
            return state
    }
}

export default itinerariesReducer