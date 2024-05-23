import React, { Component } from 'react'

export default class CustomApp extends Component {
    showMessage = () => {
        alert('You clicked a button.');
        };
  render() {
    return (
      <>
        <h1>Class Component without state or life cycle</h1>
        <button onClick={this.showMessage}>Click me</button> 
      </>
    )
  }
}
