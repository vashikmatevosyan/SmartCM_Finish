export const GET_TASKS_REQUEST='GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS='GET_TASKS_SUCCESS';
export const GET_TASKS_FAIL='GET_TASKS_FAIL';
export const UPDATE_TASKS_REQUEST='UPDATE_TASKS_REQUEST';
export const UPDATE_TASKS_SUCCESS='UPDATE_TASKS_SUCCESS';
export const UPDATE_TASKS_FAIL='UPDATE_TASKS_FAIL';
export const DELETE_TASKS_REQUEST='DELETE_TASKS_REQUEST';
export const DELETE_TASKS_SUCCESS='DELETE_TASKS_SUCCESS';
export const DELETE_TASKS_FAIL='DELETE_TASKS_FAIL';


export function getTasksData(data){
    return {
        type:GET_TASKS_SUCCESS,
        payload: data,
    }
}

export function updateTasksData(data , id){
    return {
        type:UPDATE_TASKS_SUCCESS,
        payload: { data , id },
    }
}

export function deleteTasksData(id){
    return {
        type:DELETE_TASKS_SUCCESS,
        payload: { id },
    }
}
