import React from 'react'

const CustomApp = () => {

    // sample string values 
    const finiteString = '123';
    const infiniteString = "Infinity"
    const nonNumericString = "abc"

    const checkIsFinite = (value) => {
        const isFiniteValue = isFinite(Number(value))
        return (
            <>
                {value} : {isFiniteValue ? 'finite' : 'not finite'}
            </>
        )

    }


    return (
        <>
            {checkIsFinite(finiteString)}<br />
            {checkIsFinite(infiniteString)}<br />
            {checkIsFinite(nonNumericString)}
        </>
    )
}

export default CustomApp
