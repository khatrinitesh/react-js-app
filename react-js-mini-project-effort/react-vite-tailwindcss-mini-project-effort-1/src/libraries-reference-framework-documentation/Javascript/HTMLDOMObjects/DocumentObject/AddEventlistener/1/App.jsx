import React, { useState, useEffect } from 'react';

const CustomApp = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        // function to handle the event
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
        }
        // attach event listener when component mounts - born
        window.addEventListener('resize', handleResize);
        // clean up the event listener when component unmounts - death
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);
    return (
        <>
            <p>Window height : {windowHeight}</p>
            <p>Window width : {windowWidth}</p>
        </>
    )
}



export default CustomApp
