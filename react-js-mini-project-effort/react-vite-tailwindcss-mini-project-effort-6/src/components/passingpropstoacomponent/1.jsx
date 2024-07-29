import React, { useState } from 'react'

const PassingProps = () => {
  return (
    <>
        <Card title="gello title">
            <p>Nulla velit in voluptate ea voluptate officia cillum cupidatat.</p>
        </Card>
    </>
  )
}

export default PassingProps

// passing jsx as props 
const Card = ({title,children}) => {
    return(
        <>
         <h2>{title}</h2>
         <div>{children}</div>
        </>
    )
}


// passing function as props 
const Counter = ({increment}) => {
    return(
        <>
       
         <button onClick={increment}>Increment</button>
        </>
    )
}

// using default props
const UserProfile1 = ({name,age}) => {
    return(
        <>
         Username: {name}
         age: {age}
        </>
    )
}

UserProfile1.defaultProps = {
    name:'guest',
    age:35
}

// destructing props 
const UserProfile = ({name,age}) => {
    return(
        <>
         {name} - {age}
        </>
    )
}

// passing props to component
//child component
const Greeting = ({name}) => {
    return(
        <>
        <h1>hello, {name}</h1></>
    )
}

