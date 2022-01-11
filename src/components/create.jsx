import React, {Component} from "react";

export default class Create extends Component{
    render(){
        return(
            <div className="col-6 add-list">
                <div>
                    <label className="label">Today's Activity</label>
                </div>
                <div>
                    <input className="inputArea"
                        type="text" 
                        placeholder="Add to do" 
                        onChange={this.props.onChange}
                        value={this.props.value}
                    />
                </div>
                <button type="button" className="btn btn-light btn-sm" onClick={this.props.onClick}>Submit</button>
            </div>
        )
    }
}