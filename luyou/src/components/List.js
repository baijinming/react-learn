import React, { Component } from 'react';
import {Route,Link} from "react-router-dom";
import Detail from "./Detail";
import  createBrowserHistory from  'history/createBrowserHistory';
const history=createBrowserHistory({forceRefresh:true});

export default class List extends Component {
    render() {
        return (
            <div>
                <h1>列表页组件</h1>
                <ul>
                    <li><Link to="/list/detail/1">第一条新闻</Link></li>
                    <li><Link to="/list/detail/2">第二条新闻</Link></li>
                    <li><Link to="/list/detail/3">第三条新闻</Link></li>
                    <li><Link to="/list/detail/4">第四条新闻</Link></li>
                    <li><Link to="/list/detail/5">第五条新闻</Link></li>
                </ul>
                <button onClick={()=>history.push('/list/detail/100')}>第100条新闻</button>
                <Route path="/list/detail/:id" component={Detail}/>
            </div>
        );
    }
}
