import React, { useState, useEffect } from 'react'

const GetCurrentScreenSizeApp = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
    }

    useEffect(() => {
        // Set initial screen size  
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        // Add event listener for window resize
        window.addEventListener('resize', handleResize)
        document.title = `width : ${screenWidth} ${screenHeight}`
        // cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [screenWidth, screenHeight]);

    return (
        <>
            <p>Current Screen Size:</p>
            <p>Width: {screenWidth}px</p>
            <p>Height: {screenHeight}px</p>
        </>
    )
}

export default GetCurrentScreenSizeApp
