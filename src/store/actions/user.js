export const GET_LOGIN_REQUEST='GET_LOGIN_REQUEST';
export const GET_LOGIN_CANCEL='GET_LOGIN_CANCEL';
export const GET_LOGIN_SUCCESS='GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAIL='GET_LOGIN_FAIL';
export const GET_LOGOUT='GET_LOGOUT';
export const LOGIC_TEST_REQUEST='LOGIC_TEST_REQUEST';
export const LOGIC_TEST_SUCCESS='LOGIC_TEST_SUCCESS';
export const LOGIC_TEST_FAIL='LOGIC_TEST_FAIL';
export const LOGIC_TEST_CANCEL='LOGIC_TEST_FAIL';


export function getLoginData(name){
    return {
        type:GET_LOGIN_SUCCESS,
        payload: name,
    }
}
export function getLoginRequest(login){
    return {
        type:GET_LOGIN_REQUEST,
        payload: login,
    }
}
export function getLogOut(){

    return {
        type:GET_LOGOUT,
        // payload: '',
    }
}


