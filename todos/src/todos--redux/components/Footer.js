import React,{Component} from "react";
import PropTypes from "prop-types";

export default class Footer extends Component{
    static propTypes={
        statisticsActive:PropTypes.number.isRequired,
        setVisibility:PropTypes.func.isRequired,
        visibility:PropTypes.string.isRequired,
        statisticsCompleted:PropTypes.number.isRequired,
        removeCompleted:PropTypes.func.isRequired,
    }
    render(){
        return(
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.statisticsActive}</strong> items left</span>
                <ul className="filters">
                    <li><a href="javascript:;" className={this.props.visibility=="all"?"selected":""} onClick={()=>this.props.setVisibility("all")}>All</a></li>
                    <li><a href="javascript:;" className={this.props.visibility=="active"?"selected":""} onClick={()=>this.props.setVisibility("active")}>Active</a></li>
                    <li><a href="javascript:;" className={this.props.visibility=="completed"?"selected":""} onClick={()=>this.props.setVisibility("completed")}>Completed</a></li>
                </ul>
                {this.props.statisticsCompleted?<button className="clear-completed" onClick={()=>this.props.removeCompleted()}>Clear completed</button>:null}
            </footer>
        )
    }
}