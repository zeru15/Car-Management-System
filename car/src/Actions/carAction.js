import axios from 'axios'
import { GET_CARS, ADD_CAR, DELETE_CAR, CARS_LOADING, GET_REQUESTEDCARS, REQUEST_CAR, IS_REQUESTED } from './Types'

export const getCars = () => async (dispatch) => {
    // dispatch(setCarsLoading());
    await axios
        .get('http://localhost:5000/api/cars')
        .then(res => {
            dispatch({
                type: GET_CARS,
                payload: res.data
            })

        })
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

export const requestCar = ( userId, carId ) => dispatch => {
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


export const setCarsLoading = () => {
    return {
        type: CARS_LOADING
    }
};
