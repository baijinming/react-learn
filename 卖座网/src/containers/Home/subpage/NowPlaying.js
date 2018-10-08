import React,{Component} from "react";
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";

export default class NowPlaying extends Component{
    static propTypes(){
        nowPlaying:PropTypes.array.isRequired;
    }
    render(){
        return(
            <div className="now-playing">
                <ul>
                    {this.props.nowPlaying && this.props.nowPlaying.map(item=>
                        <FilmItem film={item} key={item.id}/>
                    )}
                </ul>
                <button>显示更多</button>
            </div>
        )
    }

}