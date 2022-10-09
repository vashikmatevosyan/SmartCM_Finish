import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL
} from "../actions/events";
import events from "../../services/Events";

const initialState = {
  eventsData: [...events],
  err: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT_REQUEST: {
      return {
        ...state,
        eventsData: [],
      };
    }
    case CREATE_EVENT_SUCCESS: {
      return {
        ...state,
        eventsData: [...state.eventsData, action.payload],
      };
    }
    case CREATE_EVENT_FAIL: {
      return {
        ...state,
        err: "ERROR",
      };
    }
    default:
      return state;
  }
}
