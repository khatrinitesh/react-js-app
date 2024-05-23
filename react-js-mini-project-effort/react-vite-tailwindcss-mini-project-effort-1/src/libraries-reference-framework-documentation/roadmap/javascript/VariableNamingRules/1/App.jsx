import React, { useEffect, useState } from 'react';

const CustomApp = () => {

    const [windowW, setWindowW] = useState(window.innerWidth);

    useEffect(() => {
        // update the window width when it is resized
        const handleResize = () => {
            setWindowW(window.innerWidth)
        }
        // Add event listener for window resize
        window.addEventListener('resize', handleResize)
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <>
            <p>Window width: {windowW}</p>
        </>
    )
}

export default CustomApp
