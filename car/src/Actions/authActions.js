import axios from 'axios'
import { returnErrors } from './errorActions'
import { USER_LOADING, USER_LOADED, 
    AUTH_ERROR, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAIL } from './Types';

//Check token & load User
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING});
    
   

    axios.get('http://localhost:5000/api/auth/user', tokenConfig(getState))
         .then(res => 
            dispatch({
            type: USER_LOADED,
            payload: res.data
         })
         )
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status ));
            dispatch({
            type: AUTH_ERROR
         })
        })
}

//Register User
export const register = ({ name, email, password }) => dispatch => {

    //Headers
    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ name, email, password })

    axios.post('http://localhost:5000/api/users', body, config )
         .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
         }))
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL' ));
            dispatch({
                type: REGISTER_FAIL
            });
         });
}

//Login User
export const login = ({ email, password , isAdmin }) => dispatch => {

    //Headers
    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ email, password, isAdmin })

    axios.post('http://localhost:5000/api/auth', body, config )
         .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
         })
         )
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL' ));
            dispatch({
                type: LOGIN_FAIL
            });
         });
}



//Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


// Setup config/headers and token
export const tokenConfig = getState => {
     //Get token from localStorage
     const token = getState().auth.token;

     //Headers
     const config = {
         headers: {
             "content-type": "application/json"
         }
     }
 
     //If token, Add to headers
     if(token) {
         config.headers['x-auth-token'] = token;
     }
     return config;
}