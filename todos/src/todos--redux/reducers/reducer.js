import {combineReducers} from "redux";
import todos from "./todos"
import visibility from "./visibility"

const reducer=combineReducers({
    todos,
    visibility
})

export default reducer;
