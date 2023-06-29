import React,{Component} from 'react'

 class Car extends Component {
    constructor(){
        super()
        this.state={
            car:"ferrari"
        
        }
    }
    changeName(){
        this.setState({
            car:"Benz"
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.car}</h1>
                <button onClick={()=>this.changeName()}>Change</button>
            </div>
          )
        }
    }
  
export default Car;