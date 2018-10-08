import React,{Component} from "react"

import "../../styles/film.css"
import SlideShow from "./subpage/SlideShow"
import NowPlaying from "./subpage/NowPlaying"
import ComingSoon from "./subpage/ComingSoon"
import {getSlideShow,getNowPlaying,getComingSoon} from "../../api/Index"

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            slideShow:[],
            nowPlaying:[],
            comingSoon:[]
        }
    }
    componentWillMount(){
        getSlideShow().then(res=>{
            this.setState({
                slideShow:res.data.billboards
            })
        }).catch(err=>console.log(err));
        getNowPlaying().then(res=>{
            this.setState({
                nowPlaying:res.data.films
            })
        }).catch(err=>console.log(err));
        getComingSoon().then(res=>{
            this.setState({
                comingSoon:res.data.films
            })
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <SlideShow slideShow={this.state.slideShow}/>
                <NowPlaying nowPlaying={this.state.nowPlaying}/>
                <ComingSoon comingSoon={this.state.comingSoon}/>
            </div>
        )
    }
}
