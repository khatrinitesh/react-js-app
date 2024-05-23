import React, { Component } from 'react'

export default class CustomClasses extends Component {

    constructor(props){
        super(props)
        this.state = {
            num:0
        }
        this.setNum = this.setNum.bind(this)
    }

    setNum(){
        this.setState({
            num:this.state.num + 1
        })
    }
  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={this.setNum}>Add new day</button>
      </div>
    )
  }
}
