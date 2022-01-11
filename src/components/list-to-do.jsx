import React, {Component} from "react";

export default class List extends Component{
    render(){
        return(
            <div style={{backgroundColor:"chocolate", margin:10, padding:10}}>
                {this.props.title}
            </div>
        )
    }

}