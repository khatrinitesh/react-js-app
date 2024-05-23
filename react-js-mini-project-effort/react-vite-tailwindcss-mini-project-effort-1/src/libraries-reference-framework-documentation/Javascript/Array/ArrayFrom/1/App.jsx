import React from 'react'

const CustomApp = () => {

    // Array-like object (e.g., NodeList)
    const nodeList = document.querySelectorAll('div')

    //  Use Array.from to create a new array from the NodeList
    const divArray = Array.from(nodeList)

    // render the component
  return (
    <>
      <p>New Array from NodeList: {divArray.length} div elements</p>
    </>
  )
}

export default CustomApp
