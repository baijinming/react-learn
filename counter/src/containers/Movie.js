import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/movie";

class Movie extends Component{
    componentWillMount(){
        this.props.getFilms()
    }
    render(){
        return(
            <div>
                <h1>电影列表</h1>
                <p>{this.props.loading?"正在加载中...":null}</p>
                <ul>
                    {this.props.films.map((film,index)=>
                        <li key={film.id}>
                            <h3>{film.name}</h3>
                            <img src={film.cover.origin} alt=""/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        loading:state.loading,
        films:state.films
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Movie)