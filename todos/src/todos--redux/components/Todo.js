import React,{Component} from "react";
import PropTypes from "prop-types"

export default class Todo extends Component{
    static propTypes={
        todo:PropTypes.object.isRequired,
        removeTodo:PropTypes.func.isRequired,
        toggleTodo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.state={
            editing:false
        }
    }
    setClassName(){
        if(this.props.todo.complete){
            if(this.state.editing){
                return "todo completed editing"
            }
            return "todo completed"
        }else {
            if(this.state.editing){
                return "todo editing"
            }
            return "todo"
        }
    }
    //双击开始编辑
    handleDoubleClick(){
        this.setState({
            editing:true
        },()=>{
            this.refs.ipt.focus();
        })
    }
    //键盘enter、esc键操作
    handleKeyUp(e){
        if(e.keyCode==13){
            this.update(e.target.value.trim())
        }else if(e.keyCode==27){
            this.setState({
                editing:false
            })
            e.target.value=this.props.todo.connect;
        }
    }
    //更新todo.connent的方法
    update(text){
        if(text){
            this.props.updateTodo(this.props.todo,text)
        }else{
            this.props.removeTodo(this.props.todo)
        }
        this.setState({
            editing:false
        })
    }
    //失去焦点时
    handleBlur(e){
        let text=e.target.value.trim();
        this.update(text)
    }
    render(){
        return(
            <li className={this.setClassName()}>
                <div className="view">
                    <input type="checkbox" className="toggle" checked={this.props.todo.complete} onChange={()=>this.props.toggleTodo(this.props.todo)}/>
                    <label onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.todo.connect}</label>
                    <button className="destroy" onClick={()=>this.props.removeTodo(this.props.todo)}></button>
                </div>
                {this.state.editing?
                    <input ref="ipt" type="text" style={{display:this.state.editing?"block":"none"}} className="edit"
                           defaultValue={this.props.todo.connect}
                           onKeyUp={this.handleKeyUp.bind(this)}
                           onBlur={this.handleBlur.bind(this)}
                    />
                    :null
                }
            </li>
        )
    }
}