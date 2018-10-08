import React,{Component} from "react";
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";

export default class ComingSoon extends Component{
    static propTypes(){
        comingSoon:PropTypes.array.isRequired;
    }
    render(){
        return(
            <div className="comeing-soon">
                <ul>
                    {this.props.comingSoon && this.props.comingSoon.map(item=>
                        <FilmItem film={item} key={item.id}/>
                    )}
                </ul>
                <button>显示更多</button>
            </div>
        )
    }

}