import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  UPDATE_TASKS_REQUEST,
  UPDATE_TASKS_SUCCESS,
  UPDATE_TASKS_FAIL,
  DELETE_TASKS_SUCCESS
} from "../actions/tasks";
import tasks from "../../services/Tasks";

const initialState = {
  taskData: [...tasks],
  err: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST: {
      return {
        ...state,
        taskData: [],
      };
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        taskData: [...state.taskData, action.payload],
      };
    }
    case GET_TASKS_FAIL: {
      return {
        ...state,
        err: "ERROR",
      };
    }
    case UPDATE_TASKS_SUCCESS: {
      state.taskData.map((item) => {
        if (item.id === action.payload.id) {
          item.duration = action.payload.data.duration;
          item.title = action.payload.data.title;
          item.date = action.payload.data.date;
          item.project = action.payload.data.project;
          item.color = action.payload.data.color;
        }
      });
      return {
        ...state,
        taskData: [...state.taskData],
      };
    }
    case DELETE_TASKS_SUCCESS: {
      const newTaskData = state.taskData.filter(task => task.id !== action.payload.id)
      return {
        ...state,
        taskData: [...newTaskData],
      };
    }
    default:
      return state;
  }
}
