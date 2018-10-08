import {createStore,applyMiddleware} from "redux"
import reducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";

const state={
    counter:5,
    loading:false,
    films:[]
}

//增强createStore方法，使其能完成异步操作
const createStoreWithMiddleware=applyMiddleware(
    thunkMiddleware
)(createStore);

const store=createStoreWithMiddleware(reducer,state);
export default store;