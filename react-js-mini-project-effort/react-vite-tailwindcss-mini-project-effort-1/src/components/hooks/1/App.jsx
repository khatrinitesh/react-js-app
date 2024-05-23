import React, { useState, useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
      <HooksExample/>
    </>
  )
}

export default CustomApp

const HooksExample = () => {
    // state to manage a counter 
    const [counter,setCounter] = useState(0);

    // state to manage a boolean value 
    const [isToggleOn,setToggle] = useState(false);

    // useEffect to simulate componendDidMount and componentDidUpdate - date of birth
    useEffect(() => {
        console.log('Component did mount or update')
        // Cleanup function for componentWillUnmount - death
        return () => {
            console.log('Component will unmount');
        }
    },[counter]) // Dependency array to specify when the effect should run

    // event handler to increment the counter 
    const handleInc = () => {
        setCounter(counter + 1)
    }

    // event handler to decrement the counter
    const handleDec = () => {
        setCounter(counter - 1)
    }

    // event handler to toggle the boolean value 
    const handleToggle =() => {
        setToggle(!isToggleOn)
    }

    return(
        <>
        {counter}
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <p>
            Toggle: {isToggleOn ? 'On' : 'Off'}
        </p>
        <button onClick={handleToggle}>Toggle</button>
        </>
    )
}
