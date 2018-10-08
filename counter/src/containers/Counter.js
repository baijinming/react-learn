import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/counter";
import Show from "../components/Show";
import Add from "../components/Add";
import Sub from "../components/Sub";
import AsyncAdd from "../components/AsyncAdd";
import OddAdd from "../components/OddAdd";

class Counter extends Component{
    render(){
        return(
            <div>
                <Show counter={this.props.counter}/>
                <p>
                    <Add increment={this.props.increment}/>&nbsp;
                    <Sub decrement={this.props.decrement}/>&nbsp;
                    <AsyncAdd incrementAsync={this.props.incrementAsync}/>&nbsp;
                    <OddAdd incrementIfOdd={this.props.incrementIfOdd}/>
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
