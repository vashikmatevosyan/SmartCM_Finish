export const CREATE_EVENT_REQUEST='CREATE_EVENT_REQUEST';
export const CREATE_EVENT_SUCCESS='CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAIL='CREATE_EVENT_FAIL';


export function getEventsData(data){
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: data,
  }
}
