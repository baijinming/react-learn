import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    TOGGLE_ALLTODO,
    SET_VISIBILITY,
    REMOVE_COMPLETED,
    UPDATE_TODO
} from "../constants/actionTypes"

//添加todo的方法
export function addTodo(todo) {
    return{
        type:ADD_TODO,
        todo
    }
}
//删除todo的方法
export function removeTodo(todo) {
    return{
        type:REMOVE_TODO,
        todo
    }
}
//切换todo状态的方法
export function toggleTodo(todo) {
    return{
        type:TOGGLE_TODO,
        todo
    }
}
//切换使用todo状态的方法
export function toggleAllTodo(bloean) {
    return{
        type:TOGGLE_ALLTODO,
        bloean
    }
}

//清除所有完成的todo
export function removeCompleted() {
    return{
        type:REMOVE_COMPLETED
    }
}
//更新todo的方法
export function updateTodo(todo,text) {
    return{
        type:UPDATE_TODO,
        todo,
        text
    }
}