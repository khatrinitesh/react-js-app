import React from 'react'

const CustomApp = () => {

    // sample number 
    const originalNumber = 3.14159;

    // round the number 
    const roundedNum = Math.round(originalNumber)
    return (
        <div>
            <p>Original Number: {originalNumber}</p>
            <p>Rounded Number: {roundedNum}</p>
        </div>
    )
}

export default CustomApp
