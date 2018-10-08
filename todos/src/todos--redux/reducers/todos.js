import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    TOGGLE_ALLTODO,
    REMOVE_COMPLETED,
    UPDATE_TODO
} from "../constants/actionTypes"

export default function todos(state=[],action) {
    switch (action.type){
        //添加todo的方法
        case ADD_TODO:
            return [...state,action.todo];
        //删除todo的方法
        case REMOVE_TODO:
            var todos=[...state];
            var index=todos.findIndex(todo=>todo==action.todo);
            todos.splice(index,1);
            return todos;
        //切换todo状态的方法
        case TOGGLE_TODO:
            var todos=[...state];
            var index=todos.findIndex(todo=>todo==action.todo);
            todos[index].complete=!todos[index].complete;
            return todos;
        //切换所有todo状态的方法
        case TOGGLE_ALLTODO:
            var todos=[...state];
            todos.map(todo=> todo.complete=action.bloean);
            return todos;
        //清除所有完成的todo
        case REMOVE_COMPLETED:
            var todos=[...state];
            return todos.filter(todo=>!todo.complete);
        case UPDATE_TODO:
            var todos=[...state];
            var index=todos.findIndex(todo=>todo==action.todo);
            todos[index].connect=action.text;
            return todos;
        default:
            return state;
    }
}