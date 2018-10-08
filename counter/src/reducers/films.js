

export default function films(state=[],action) {
    switch (action.type){
        case "SET_FILMS":
            return action.flms;
        default:
            return state;
    }
}