import React, { Component } from 'react'

export default class CustomApp extends Component {
    state = {
        message:''
    }
    showMsg  = () => {
        alert(this.state.message)
    }
    handleChange = e => {
        this.setState({
            message:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <button onClick={this.showMsg}>Click me</button>
      </div>
    )
  }
}
