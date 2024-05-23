import React, { Component } from 'react'

export default class CustomApp extends Component {

    state = {
        name:'',
        subject:'',
        message:''
    }

    showMsg = () => {
        console.log(this.state.name)
        console.log(this.state.subject)
        console.log(this.state.message)
    }
    handleInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };

  render() {
    return (
      <>
        <input type='text' className='' name="name" value={this.state.name} onChange={this.handleInput}/>
        <br/>
        <input type='text' className='' name="subject" value={this.state.subject} onChange={this.handleInput}/>
        <br/>
        <input type='text' className='' name="message" value={this.state.message} onChange={this.handleInput}/>
        <br/>
        {this.state.name}
        {this.state.subject}
        {this.state.message}
      </>
    )
  }
}
