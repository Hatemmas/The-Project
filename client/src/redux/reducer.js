import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes";

const init = {
    loading: false,
    errors: null,
    users: null,
    isAuth: false
}

const reducer = (state = init, {type, payload}) => {
    switch (type) {
        case REGISTER:
        case LOGIN:
        // case GET_PROFILE:
            return {
                ...state, loading: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state, loading: false, users: payload, errors: null, isAuth: true
            }  
        // case GET_PROFILE_SUCCESS:
        //     return {
        //         ...state, loading: false, users: payload, errors: null, isAuth: true
        //     }  
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        // case GET_PROFILE_FAIL:
            return {
                ...state, loading: false, errors: payload
            }
    
        default:
            return state
    }
}

export default reducer