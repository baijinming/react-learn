import React,{Component} from "react"
import "../../styles/navbar.css"
import ProTypes from "prop-types"

export default class Header extends Component {
    static propTypes={
        title:ProTypes.string.isRequired,
        toggleNav:ProTypes.func.isRequired,
    }
    render(){
        return(
            <div>
                <header>
                    <div className="navbar-left" onClick={()=>this.props.toggleNav()}>
                        <div className="bar" >
                            <i className="iconfont icon-list"></i>
                        </div>
                            <h1>{this.props.title}</h1>
                    </div>
                    <div className="navbar-right">
                        <div className="city">北京<i className="iconfont icon-dropdown"></i></div>
                        <div className="user"><i className="iconfont icon-user"></i></div>
                    </div>
                </header>
            </div>
        )
    }
}
