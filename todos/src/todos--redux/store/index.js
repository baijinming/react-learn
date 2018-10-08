import {createStore} from "redux"
import reducer from "../reducers/reducer"

const state={
    todos:[],
    visibility:"all"
}

const store=createStore(reducer,state);

export default store;