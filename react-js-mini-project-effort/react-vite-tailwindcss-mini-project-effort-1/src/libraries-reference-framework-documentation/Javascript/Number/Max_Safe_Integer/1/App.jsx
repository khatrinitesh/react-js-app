import React from 'react'

const CustomApp = () => {
    // Get the MAX_SAFE_INTEGER value
    const maxSafeInteger = Number.MAX_SAFE_INTEGER;
    return (
        <>
            <p>Max Safe Integer (toString()): {maxSafeInteger.toString()}</p>
            <p>Max Safe Integer (Interpolation): {`${maxSafeInteger}`}</p>
        </>
    )
}

export default CustomApp
