import React from 'react'

const CustomApp = () => {

    // array with some elements 
    const fruits = ['apple', 'banana', 'orange', 'grape']

    // string with some characters
    const message = 'hello, react!';

    // render the components
  return (
    <>
    <h3>Fruits</h3>
    <p>Number of fruits: {fruits.length}</p>

    <h3>Messages</h3>
    <p>Number of characters: {message.length}</p>

    </>
  )
}

export default CustomApp
