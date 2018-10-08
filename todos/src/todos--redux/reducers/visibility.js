import {SET_VISIBILITY} from "../constants/actionTypes"

export default function visibility(state="all",action) {
    switch (action.type){
        case SET_VISIBILITY:
            return action.filter;
        default:
            return state;
    }
}
