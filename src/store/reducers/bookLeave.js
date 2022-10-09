import {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAIL
} from "../actions/bookLeave";


const initialState = {
  bookAllData: [],
  err: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK_REQUEST: {
      return {
        ...state,
        bookAllData: [],
      };
    }
    case CREATE_BOOK_SUCCESS: {
      return {
        ...state,
        bookAllData: [...state.bookAllData, action.payload],
      };
    }
    case CREATE_BOOK_FAIL: {
      return {
        ...state,
        err: "ERROR",
      };
    }
    default:
      return state;
  }
}
