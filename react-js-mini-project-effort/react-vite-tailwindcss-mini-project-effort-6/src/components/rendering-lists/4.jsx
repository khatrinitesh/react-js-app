import React, { useState } from 'react'

const ConditionalRendering = () => {

    const [isLoggedin,setIsLogged] = useState(false);
    let content = ''
    if(isLoggedin){
            content = 'nitesh khatri'
    }
    else{
        content = "sameet khatri"
    }

    const handleToggle = () => {
        setIsLogged(!isLoggedin)
    }

    return(
        <>
        {content}
        <button onClick={handleToggle}>Click</button>
        </>
    )
}

export default ConditionalRendering
