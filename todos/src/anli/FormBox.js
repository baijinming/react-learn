import React, { Component } from 'react';
export default class FormBox extends Component{
    add(){
        let name=this.refs.name.value.trim();
        let content=this.refs.content.value.trim();
        let res={
            name,
            content,
            time:+new Date()
        }
        if(name && content){
            this.props.addComment(res)
        }else {
            alert(`不能为空`)
        }

    }
    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name" >用户名：</span>
                    <div className="comment-field-input" ><input type="text" ref="name" /></div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input"><textarea ref="content"></textarea></div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.add.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}