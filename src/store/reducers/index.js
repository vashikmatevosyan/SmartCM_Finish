import {combineReducers} from "redux";
import user from './user'
import tasks from './tasks'
import events from './events'
import bookLeave from './bookLeave'


export default combineReducers({
    user,
    tasks,
    events,
    bookLeave
})
