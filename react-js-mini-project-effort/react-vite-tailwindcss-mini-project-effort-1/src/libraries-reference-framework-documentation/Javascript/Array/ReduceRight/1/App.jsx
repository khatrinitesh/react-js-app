import React from 'react'

const CustomApp = () => {

    // Sample array
    const numbers = [1, 2, 3, 405, 506];

    // implementing reduce right
    const result = numbers.reduceRight((a, b) => {
        return a + b
    }, 0)

    return (
        <div>
            <p>Original Array: {numbers.join(', ')}</p>
            <p>Result of reduceRight: {result}</p>
        </div>
    )
}

export default CustomApp
