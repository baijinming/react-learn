import React,{Component} from 'react';
import "./todo-mvc.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default class TodoMVC extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[],
            visibility:"all",
            bolean:true
        }
    }
    //添加todo的方法
    addTodo(todo){
        this.state.todos.push(todo);
        this.setState({
            todos:this.state.todos
        })
    }
    //删除todo的方法
    removeTodo(todo){
        let index=this.state.todos.findIndex(item=>item==todo);
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        })
    }
    //切换todo状态的方法
    cutTodo(todo){
        let index=this.state.todos.findIndex(item=>item==todo);
        this.state.todos[index].complete=!this.state.todos[index].complete;
        this.setState({
            todos:this.state.todos
        })
    }
    //切换所有todo状态的方法
    cutAll(blo){
        this.state.todos.forEach(item=>item.complete=blo);
        this.setState({
            todos:this.state.todos
        })
    }
    //统计未完成todo个数的方法
    statisticsActive(){
        return this.state.todos.filter(item=>!item.complete).length
    }
    //显示过滤后的todos的方法
    filterTodos(){
        switch (this.state.visibility){
            case "all":
                return this.state.todos;
            case "active":
                return this.state.todos.filter(item=>!item.complete);
            case "completed":
                return this.state.todos.filter(item=>item.complete);
            default:
                break;
        }
    }
    //修改visibility的方法
    setVisibility(title){
        this.setState({
            visibility:title
        })
    }
    //统计完成todo个数的方法
    statisticsCompleted(){
        return this.state.todos.filter(item=>item.complete).length
    }
    //清除完成的任务的方法
    clearCompleted(){
        let activetodos= this.state.todos.filter(item=>!item.complete);
        this.setState({
            todos:activetodos
        })
    }
    //更新todo的方法
    updateTodo(todo,text){
        let index=this.state.todos.findIndex(item=>item==todo);
        this.state.todos[index].connect=text;
        this.setState({
            todos:this.state.todos
        })
    }

    render(){
        return(
            <section className="todoapp">
                <AddTodo addTodo={this.addTodo.bind(this)}/>
                <TodoList removeTodo={this.removeTodo.bind(this)}
                          cutTodo={this.cutTodo.bind(this)}
                          cutAll={this.cutAll.bind(this)}
                          filterTodos={this.filterTodos()}
                          updateTodo={this.updateTodo.bind(this)}
                />
                {this.state.todos.length>0?
                    <Footer statisticsActive={this.statisticsActive()}
                            setVisibility={this.setVisibility.bind(this)}
                            visibility={this.state.visibility}
                            statisticsCompleted={this.statisticsCompleted()}
                            clearCompleted={this.clearCompleted.bind(this)}
                    />
                    :null
                }
            </section>
        )
    }

}