import React from 'react'

const CustomApp = () => {
    const stringValue = 'hello, react'

    const valueofresult = stringValue.valueOf();
    return (
        <>
            <p>Original String: {stringValue}</p>
            <p>Expected String: {valueofresult}</p>
        </>
    )
}

export default CustomApp
