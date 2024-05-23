import React, { useState } from 'react';

export default function CustomApp() {

    const [state, setState] = useState({ count: 0, isActive: false })

    const incrementCount = () => {
        setState(prevState => ({...prevState,count:prevState.count+1}))
    }

    const toggleActive  =() => {
        setState(prevState => ({...prevState,isActive:!prevState.isActive}))
    }
  return (
    <div>
        <p>Count: {state.count}</p>
        <p>Active: {state.isActive ? 'Yes' : 'No'}</p>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={toggleActive}>Toggle Active</button>
    </div>
  )
}
