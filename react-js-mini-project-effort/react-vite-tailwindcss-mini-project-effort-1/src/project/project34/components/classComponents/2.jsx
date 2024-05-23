import React, { Component } from 'react'

export default class CustomClasses extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:"BLUE"
        }
    }

    componentDidMount(){
        console.log('the component successfully mounted!',this.state.color)
    }
    componentDidUpdate(){
        console.log('the component was udpated!',this.state.color)
    }

    pressRedBtn(){
        this.setState({
            color:'RED'
        })
    }
    pressBlueBtn(){
        this.setState({
            color:'BLUE'
        })
    }

  render() {
    return (
      <div>
        {this.state.color}
        <button onClick={() => this.pressRedBtn()}>Red</button>    
        <button onClick={() => this.pressBlueBtn()}>Blue</button>    
      </div>
    )
  }
}
