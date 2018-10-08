

export function increment() {
    return{
        type:"INCREMENT"
    }
}

export function decrement() {
    return{
        type:"DECREMENT"
    }
}

//异步+1操作
export function incrementAsync() {
    return function (dispatch,getState) {
        setTimeout(function () {
            dispatch(increment())
        },2000)
    }
}
//ifOdd+1操作
export function incrementIfOdd() {
    return function (dispatch,getState) {
        const {counter}=getState();
        if(counter%2){
            dispatch(increment())
        }
    }
}