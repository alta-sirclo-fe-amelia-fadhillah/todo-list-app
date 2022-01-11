import { Component } from "react"
import List from "../components/list-to-do"
import Create from "../components/create";

export default class Screen extends Component{
    constructor(props){
        super();
        this.state={
            inputText:"",
            list:[]
        }
    }
    handleSubmit(){
        const {inputText, list}=this.state;
        const temp={
            id:list.length+1,
            title:inputText
        }
        list.push(temp)
        this.setState({list})
        console.log(this.state.list)
    }
    render(){
        return(
            <div>
             <Create onChange={(e)=>this.setState({inputText:e.target.value})} value={this.state.inputText} onClick={()=>this.handleSubmit()}/>
             <div>
             {this.state.list.map((item)=>(
                 <List title={item.title}/>)
             )}
             </div>
             
            </div>
            
        )
    }
}