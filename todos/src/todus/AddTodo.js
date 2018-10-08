import React,{Component} from "react";
import PropTypes from "prop-types";
export default class AddTodo extends Component{
    handleKeyUp(e){
        let connect=e.target.value.trim();
        if(!connect)return;
        if(e.keyCode===13){
            this.props.addTodo({connect,complete:false});
            e.target.value="";
        };
    }
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input type="text" placeholder="what need to be done?" className="new-todo" onKeyUp={this.handleKeyUp.bind(this)}/>
            </header>
        )
    }
}
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired,
}