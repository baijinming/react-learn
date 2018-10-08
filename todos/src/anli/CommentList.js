import React,{Component} from "react";
import CommentItem from "./CommentItem";
export default class CommentList extends Component{
    render(){
        return(
            <div className="comment-list">
                {this.props.comments.map((item,index)=>
                    <CommentItem comment={item} key={index} removeComment={this.props.removeComment}/>
                )}
            </div>
        )
    }
}