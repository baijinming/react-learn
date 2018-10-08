import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom"
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Home from "./Home/Index";
import Film from "./Film/List";
import Detail from "./Film/Detail";
import "../styles/reset.css";
import "../styles/icon.css";
class App extends Component {
    constructor(props){
        super(props),
        this.state={
            showNav:false,
            title:"卖座电影"
        }
    }
    toggleNav(){
        this.setState({
            showNav:!this.state.showNav
        })
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} toggleNav={this.toggleNav.bind(this)}/>
                {this.state.showNav?<Navbar toggleNav={this.toggleNav.bind(this)}/>:null}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/film"  component={Film} />
                    <Route path="/detail/:id"  component={Detail} />
                </Switch>
            </div>
        );
    }
}
export default App;
