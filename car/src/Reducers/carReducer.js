import { GET_CARS, ADD_CAR, DELETE_CAR, CARS_LOADING, GET_REQUESTEDCARS, REQUEST_CAR, IS_REQUESTED, GET_APPROVEDCAR, IS_APPROVED, APPROVE_CAR } from '../Actions/Types';

const initialState = {
    cars: [],
    requestedCars: [],
    approvedCar: [],
    loading: false,
    user: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.payload,
                loading: false,
                user: action.userPayload
            };
        case GET_REQUESTEDCARS:
            return {
                ...state,
                requestedCars: action.payload,
                loading: false
            };

        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car._id !== action.payload)
            };
        case IS_REQUESTED:
            return {
                ...state,
                requestedCars: state.requestedCars.isRequested == true
            };

        case ADD_CAR:
            return {
                ...state,
                cars: [action.payload, ...state.cars]
            };

        case REQUEST_CAR:
            return {
                ...state,
                // cars: [action.payload, ...state.cars]
            };
        case GET_APPROVEDCAR:
            return {
                ...state,
                approvedCar: action.payload,
                loading: false
            };
        case IS_APPROVED:
            return {
                ...state,
                approvedCar: state.approvedCar.isApproved == true
            };
        case APPROVE_CAR:
            return {
                ...state
            }

        case CARS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}