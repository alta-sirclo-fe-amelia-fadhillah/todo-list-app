import React, {Component} from "react";
import "../styles/style-list.css"

export default class List extends Component{
    render(){
        return(
                <div className="col-6 list-to-do">
                    {this.props.title}
                </div>
        )  
    }

}