import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    usuarioLogueado: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_SIGNUP':
            return {
                ...state,
                usuarioLogueado: action.payload
            }  

        case 'USER_LOGOUT':
            AsyncStorage.clear()
            return {
                ...state,
                usuarioLogueado: null
            }

        default: 
            return state
    }
}


export default authReducer