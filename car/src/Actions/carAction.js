import axios from 'axios'
import { returnErrors } from './errorActions'
import { GET_CARS, ADD_CAR, DELETE_CAR, CARS_LOADING, GET_REQUESTEDCARS, REQUEST_CAR, IS_REQUESTED, APPROVE_CAR, GET_APPROVEDCAR, USER_LOADED, AUTH_ERROR, USER_LOADING } from './Types'

export const getCars = () => async (dispatch, getState) => {
    // dispatch(setCarsLoading());
    await axios
        .get('http://localhost:5000/api/cars')
        .then(res => {
            dispatch({
                type: GET_CARS,
                payload: res.data
            })

        })

    //     dispatch({ type: USER_LOADING});
    
   

    // axios.get('http://localhost:5000/api/auth/user', tokenConfig(getState))
    //      .then(res => 
    //         dispatch({
    //         type: USER_LOADED,
    //         userPayload: res.data
    //      })
    //      )
    //      .catch(err => {
    //         dispatch(returnErrors(err.response.data, err.response.status ));
    //         dispatch({
    //         type: AUTH_ERROR
    //      })
    //     })
};

export const getRequestedCars = () => async (dispatch) => {
    // dispatch(setCarsLoading());
    await axios
        .get('http://localhost:5000/api/cars?status=true')
        .then(res => {
            dispatch({
                type: GET_REQUESTEDCARS,
                payload: res.data
            })

        })
};

export const deleteCar = id => dispatch => {
    axios
        .delete(`http://localhost:5000/api/cars/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_CAR,
                payload: id
            }))
}

export const addCar = car => dispatch => {
    console.log(car)
    // return
    // axios
    // .post("http://localhost:5000/api/cars",car)
    axios({
        method: "post",
        url: "http://localhost:5000/api/cars",
        data: car,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(res =>
            dispatch({
                type: ADD_CAR,
                payload: res.data
            }))
}

export const requestCar = (userId, carId) => dispatch => {
    // console.log(car)
    // return
    // axios
    // .post("http://localhost:5000/api/cars",car)
    axios({
        method: "put",
        url: "http://localhost:5000/api/cars",
        data: {
            userId,
            carId
        },
        headers: { "Content-Type": "application/json" },
    })
        .then(res =>
            dispatch({
                type: REQUEST_CAR,
                // payload: res.data
            }))
}


export const approveCar = (userId, carId) => dispatch => {
    // console.log(car)
    // return
    // axios
    // .post("http://localhost:5000/api/cars",car)
    axios({
        method: "put",
        url: "http://localhost:5000/api/cars/result",
        data: {
            userId,
            carId
        },
        headers: { "Content-Type": "application/json" },
    })
        .then(res =>
            dispatch({
                type: APPROVE_CAR,
                // payload: res.data
            }))
}

export const getApprovedCar = () => async (dispatch) => {
    // dispatch(setCarsLoading());
    await axios
        .get('http://localhost:5000/api/cars?result=true')
        .then(res => {
            dispatch({
                type: GET_APPROVEDCAR,
                payload: res.data
            })

        })
};


export const setCarsLoading = () => {
    return {
        type: CARS_LOADING
    }
};



// Setup config/headers and token
// export const tokenConfig = getState => {
//     //Get token from localStorage
//     const token = getState().auth.token;

//     //Headers
//     const config = {
//         headers: {
//             "content-type": "application/json"
//         }
//     }

//     //If token, Add to headers
//     if(token) {
//         config.headers['x-auth-token'] = token;
//     }
//     return config;
// }