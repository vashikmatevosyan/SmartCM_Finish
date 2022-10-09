import { GET_LOGIN_REQUEST, GET_LOGOUT , GET_LOGIN_SUCCESS , GET_LOGIN_FAIL } from "../actions/user";

const initialState = {
    data: {},
    err: [],
    name: '',
    login: true,
    token: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN_REQUEST: {
            return {
                ...state,
                login: action.payload,
            }
        }
        case GET_LOGIN_SUCCESS: {
            return {
                load: false,
                name: action.payload,
            }
        }
        case GET_LOGIN_FAIL: {
            return {
                ...state,
                load: false,
                err: 'Incorrect login or password',
            }
        }
        case GET_LOGOUT: {
            return {
                ...state,
                login: false,
                name: ''
            }
        }
        default:
            return state;
    }
}
