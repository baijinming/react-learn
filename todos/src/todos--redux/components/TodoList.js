import React,{Component} from "react";
import Todo from "./Todo";
import PropTypes from "prop-types"

export default class TodoList extends Component{
    static propTypes={
        todos:PropTypes.array.isRequired,
        removeTodo:PropTypes.func.isRequired,
        toggleTodo:PropTypes.func.isRequired,
        toggleAllTodo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired,
    }
    render(){
        return(
            <section className="main">
                <input type="checkbox" className="toggle-all" onChange={e=>this.props.toggleAllTodo(e.target.checked)}/>
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                        <Todo todo={todo} key={index}
                              removeTodo={this.props.removeTodo}
                              toggleTodo={this.props.toggleTodo}
                              updateTodo={this.props.updateTodo}
                        />
                    )}
                </ul>
            </section>
        )
    }
}