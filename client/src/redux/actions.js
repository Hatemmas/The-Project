import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const registerUser = (newUser) => async (dispatch) => {
    dispatch({
        type: REGISTER,
    })
try {
    const res = await axios.post('/user/register', newUser)
    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
    })
} catch (error) {
    dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
    })
}
}


export const signIn = (users) => async (dispatch) => {
    dispatch({
        type: LOGIN
    })
    try {
        const res = await axios.post("/user/login", users)
        localStorage.setItem("token", res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data,
        })
    }
}

// export const getProfile = () => async (dispatch) => {
//     dispatch({
//         type: GET_PROFILE
//     })
//     try {
//         const token = localStorage.getItem("token")
//         const config = {
//             headers:{
//                 Authorization: token
//             }
//         }
//         const res = await axios.get("/user/getProfile", config)
//     dispatch({
//         type: GET_PROFILE_SUCCESS,
//         payload: res.data,
//         })
//     } catch (error) {
//     dispatch({
//         type: GET_PROFILE_FAIL,
//         payload: error.response.data,
//     })    
//     }
// }