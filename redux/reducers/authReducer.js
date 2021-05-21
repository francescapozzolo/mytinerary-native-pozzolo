const initialState = {
    usuarioLogueado: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_SIGNUP':
            if(action.payload){
                localStorage.setItem('usuarioLogueado', JSON.stringify({firstName: action.payload.firstName, userPic: action.payload.userPic, email: action.payload.email}))
                localStorage.setItem('token', action.payload.token)
            }
            return {
                ...state,
                usuarioLogueado: action.payload
            }  

        case 'USER_LOGOUT':
            localStorage.clear()
            return {
                ...state,
                usuarioLogueado: null
            }

        default: 
            return state
    }
}


export default authReducer