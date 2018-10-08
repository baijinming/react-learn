import React, { Component } from 'react';
import {Route,Link,Switch} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import User from "./User";
import Error from "./404";

export default class App extends Component {
  render() {
    return (
      <div>
          <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/list'>列表页</Link></li>
              <li><Link to={{pathname:"/user",search:"?username=admin"}}>用户中心</Link></li>
          </ul>
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/list" component={List}/>
               <Route path="/user" component={User}/>
               <Route component={Error} />
           </Switch>

      </div>
    );
  }
}

