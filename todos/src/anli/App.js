import React, { Component } from 'react';
import './comment.css';
import FormBox from "./FormBox";
import CommentList from "./CommentList";
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            comments:[
                {name:"sada",content:"ffffff",time:564555645645},
                {name:"sada",content:"ffffff",time:564555645645},
                {name:"sada",content:"ffffff",time:564555645645}
            ]
        }
    }
    addComment(comment){
        this.state.comments.unshift(comment);
        this.setState({
            comments:this.state.comments
        })
    }
    removeComment(comment){
        let index=this.state.comments.findIndex(item=>item==comment);
        this.state.comments.splice(index,1);
        this.setState({
            comments:this.state.comments
        })
    }
    render() {
        return (
            <div className="wrapper">
                <FormBox addComment={this.addComment.bind(this)}/>
                <CommentList comments={this.state.comments} removeComment={this.removeComment.bind(this)}/>
            </div>
        );
    }
}
export default App;
