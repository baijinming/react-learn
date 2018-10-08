import React,{Component} from "react";
import "../../styles/sidebar.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class Navbar extends Component {
    static propTypes={
        toggleNav:PropTypes.func.isRequired,
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <ul>
                        <li onClick={()=>this.props.toggleNav()}><Link to="/"><span>首页</span><i className="iconfont icon-arrow-right"></i></Link></li>
                        <li onClick={()=>this.props.toggleNav()}><Link to="/film"><span>影片</span><i className="iconfont icon-arrow-right"></i></Link></li>
                        <li><span>影院</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>商城</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>我的</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>卖座卡</span><i className="iconfont icon-arrow-right"></i></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
