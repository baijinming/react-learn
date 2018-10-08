import React,{Component} from "react";
import PropTypes from "prop-types";
import ReactSwipe from 'react-swipe';

export default class SlideShow extends Component{
    static propTypes(){
        slideShow:PropTypes.array.isRequired;
    }
    render(){
        //配置项
        const options={
            auto:2000,
            continuous: true,
        }
        return(
            <ReactSwipe key={this.props.slideShow.length} swipeOptions={options} className="carousel">
                {this.props.slideShow && this.props.slideShow.map(item=>
                    <div key={item.id}>
                        <img src={item.imageUrl} style={{width:"100%",height:"100%"}} alt=""/>
                    </div>
                )}
            </ReactSwipe>
        )
    }

}