import React from 'react'

const CustomApp = () => {

    // sample values 
    const example = 'hello'
    return (
        <>
            <p>Original string: {`${example}`}</p>
            <p>Uppercase string: {`${example.toUpperCase()}`}</p>
        </>
    )
}

export default CustomApp
