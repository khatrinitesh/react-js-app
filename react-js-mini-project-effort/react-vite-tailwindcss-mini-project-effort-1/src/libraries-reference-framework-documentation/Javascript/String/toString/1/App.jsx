import React from 'react'

const CustomApp = () => {

    // sample values 
    const numberVal = 42;
    const booleanVal = true;
    const arrayVal = [1, 2, 3]
    return (
        <>
            <p>Number Value: {numberVal.toString()}</p>
            <p>Boolean Value: {booleanVal.toString()}</p>
            <p>Array Value: {arrayVal.toString()}</p>
            {/* Using string interpolation */}
            <p>Number Value (Interpolation): {`${numberVal}`}</p>
            <p>Boolean Value (Interpolation): {`${booleanVal}`}</p>
            <p>Array Value (Interpolation): {`${arrayVal}`}</p>
        </>
    )
}

export default CustomApp
