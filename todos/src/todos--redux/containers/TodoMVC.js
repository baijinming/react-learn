import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todosactions from "../actions/todos";
import * as visibilityactions from "../actions/visibility";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import "../styles/todo-mvc.css"

class TodoMVC extends Component{
    //统计未完成todo的个数
    statisticsActive(){
        return this.props.todos.filter(todo=>!todo.complete).length
    }
    //根据visibility筛选
    filterTodos(){
        switch (this.props.visibility) {
            case "all":
                return this.props.todos;
            case "active":
                return this.props.todos.filter(todo=>!todo.complete);
            case "completed":
                return this.props.todos.filter(todo=>todo.complete);
            default:
                break;
        }
    }
    //统计完成todo的个数
    statisticsCompleted(){
        return this.props.todos.filter(todo=>todo.complete).length
    }
    render(){
        return(
            <section className="todoapp">
                <AddTodo addTodo={this.props.addTodo}/>
                <TodoList todos={this.filterTodos()}
                          removeTodo={this.props.removeTodo}
                          toggleTodo={this.props.toggleTodo}
                          toggleAllTodo={this.props.toggleAllTodo}
                          updateTodo={this.props.updateTodo}
                />
                {this.props.todos.length?
                    <Footer statisticsActive={this.statisticsActive()}
                            setVisibility={this.props.setVisibility}
                            visibility={this.props.visibility}
                            statisticsCompleted={this.statisticsCompleted()}
                            removeCompleted={this.props.removeCompleted}
                    />
                    :null}
            </section>
        )
    }
}


function mapStateToProps(state) {
    return{
        todos:state.todos,
        visibility:state.visibility
    }
}
function mapDispatchToProps(dispatch) {
    var actions=Object.assign({},todosactions,visibilityactions);
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoMVC)