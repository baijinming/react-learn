import {SET_VISIBILITY} from "../constants/actionTypes"


//设置可见性
export function setVisibility(filter) {
    return{
        type:SET_VISIBILITY,
        filter
    }
}