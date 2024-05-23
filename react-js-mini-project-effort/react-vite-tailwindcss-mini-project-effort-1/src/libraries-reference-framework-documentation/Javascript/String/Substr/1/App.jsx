import React from 'react'

const CustomApp = () => {

    // sample string
    const originalString = 'hello, react'

    // extract a substring 
    const substring = originalString.substr(0, 5) // extracts characters from index 0 to 4
    return (
        <div>
            <p>Original String: {originalString}</p>
            <p>Substring:{substring}</p>
        </div>
    )
}

export default CustomApp
