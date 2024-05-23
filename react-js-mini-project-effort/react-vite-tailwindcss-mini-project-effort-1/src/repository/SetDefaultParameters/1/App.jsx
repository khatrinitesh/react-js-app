import React from 'react'

const SetDefaultParametersApp = () => {
    return (
        <>
            <Example1 />
            <Example2 />
        </>
    )
}

export default SetDefaultParametersApp


// Using default assignment in parameters
const Example1 = ({ name = "nitesh", age = 34 }) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    )
}

// Using default values in the function body
const Example2 = ({ name, age }) => {
    // Default values are assigned in the function body if the corresponding prop is undefined
    name = name || 'sachin'
    age = age || 47
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    )
}