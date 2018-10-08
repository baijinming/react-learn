import React,{Component} from "react"
import {getDetail} from "../../api/Index"
import "../../styles/detail.css"

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state= {
            detail: {}
        }
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        console.log(id)
        getDetail(id).then(res=>{
            this.setState({
                detail:res.data.film
            });
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div className="detail">
                <img src={this.state.detail.cover && this.state.detail.cover.origin} alt=""/>
                <h2>影片简介</h2>
                <ul>
                    <li>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{this.state.detail.director}</li>
                    <li>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{this.state.detail.actors && this.state.detail.actors.map((item,index)=>
                        <span key={index} style={{borderRight:"1px solid #666"}}>&nbsp;{item.name}&nbsp;</span>
                    )}</li>
                    <li>地区语言：{this.state.detail.nation}({this.state.detail.language})</li>
                    <li>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{this.state.detail.category}</li>
                    <li>上映日期：{this.state.detail.premiereAt}</li>
                </ul>
                <p>{this.state.detail.synopsis}</p>
                <button>立即购票</button>
            </div>
        )
    }
}
