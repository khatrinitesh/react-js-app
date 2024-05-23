import React from 'react'

const CustomApp = () => {
    // Sample string with leading and trailing whitespace
    const originalString = '   Hello, React!   ';

    const trimString = originalString.trim()
    return (
        <>
            <p>Original String: {originalString}</p>
            <p>Trimmed String: {trimString}</p>
        </>
    )
}

export default CustomApp
