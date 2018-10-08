import React,{Component} from 'react';
export default class CommentItem extends Component{
    constructor(props){
        super(props);
        this.state={
            ele:""
        }
    }
    update(){
        let t1=+new Date();
        let t2=this.props.comment.time;
        let t=Math.floor((t1-t2)/1000);
        this.setState({
            ele:t
        })
    }
    componentWillMount(){
        this.update();
        this.timer=setInterval(()=>this.update(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    remove(){
        this.props.removeComment(this.props.comment)
    }
    render(){
        return(
            <div className="comment">
                <div className="comment-box">
                    <div className="comment-user">
                        <span>{this.props.comment.name}</span>
                    </div>
                    <p>{this.props.comment.content}</p>
                </div>
                <div className="btn">
                    <span>{this.state.ele}秒之前</span>
                    <a href="javascript:;" onClick={this.remove.bind(this)}>删除</a>
                </div>
            </div>
        )
    }
}