const initialState = {
    usuarioLogueado: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_SIGNUP':
            if(action.payload){
                
            }
            return {
                ...state,
                usuarioLogueado: action.payload
            }  

    //     case 'USER_LOGOUT':
    //         localStorage.clear()
    //         return {
    //             ...state,
    //             usuarioLogueado: null
    //         }

        default: 
            return state
    }
}


export default authReducer