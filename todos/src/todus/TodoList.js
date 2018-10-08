import React,{Component} from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
export default class TodoList extends Component{
    render(){
        return(
            <section className="main">
                <input type="checkbox" className="toggle-all" onChange={e=>this.props.cutAll(e.target.checked)}/>
                <ul className="todo-list">
                    {this.props.filterTodos.map((item,index)=>
                        <Todo todo={item} key={index}
                              removeTodo={this.props.removeTodo}
                              cutTodo={this.props.cutTodo}
                              updateTodo={this.props.updateTodo}
                        />
                    )}
                </ul>
            </section>
        )
    }
}
TodoList.propTypes={
    filterTodos:PropTypes.array.isRequired,
    removeTodo:PropTypes.func.isRequired,
    cutTodo:PropTypes.func.isRequired,
    cutAll:PropTypes.func.isRequired,
    updateTodo:PropTypes.func.isRequired,
}