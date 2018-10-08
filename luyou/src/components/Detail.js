import React, { Component } from 'react';
import  createBrowserHistory from  'history/createBrowserHistory';
const history=createBrowserHistory();

export default class Detail extends Component {
    render() {
        return (
            <div>
                <h3>新闻详情页面</h3>
                <p>第{this.props.match.params.id}条新闻内容</p>
                <button onClick={()=>history.goBack()}>back</button>
            </div>
        );
    }
}
