import React, {Component} from "react";

export default class Create extends Component{
    render(){
        return(
            <div>
                <label>Add to Do</label><br/>
                <input 
                    type="text" 
                    placeholder="Add to do" 
                    onChange={this.props.onChange}
                    value={this.props.value}
                    /><br/>
                <button type="button" onClick={this.props.onClick}>Submit</button>
            </div>
        )
    }
}