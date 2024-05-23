import React from 'react'

const CustomApp = () => {
    // sample string with trailing space 
    const stringWithSpaces = 'Reactjs example '

    // using trimEnd() to remove trailing spaces 
    const trimString = stringWithSpaces.trimEnd()
    return (
        <>
            <p>Original String: {stringWithSpaces}</p>
            <p>Trimmed String: {trimString}</p>
        </>
    )
}

export default CustomApp
