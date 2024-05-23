import React from 'react'

const CustomApp = () => {

    // ewxample array of numbers
    const num = [155, 2, 3, 4, 5];

    // use to reduce to calculate the sum
    const sum = num.reduce((a, b) => {
        return a + b
    }, 0)
    return (
        <div>
            <ul>
                {num.map((val, index) => {
                    return (
                        <li key={index}>{val}</li>
                    )
                })}
            </ul>
            <hr className='border-solid border-black border-[1px] block' />
            <strong>{sum}</strong>
        </div>
    )
}

export default CustomApp
