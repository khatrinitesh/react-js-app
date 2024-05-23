import React, { useState, useEffect } from 'react';

const CustomApp = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Access the dimensions in your component
    const { width, height } = windowDimensions;


    // Your logic based on width and height
    const isMobile = width <= 768

    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
            {isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}
            {/* Other components based on the dimensions */}
        </>
    )
}

export default CustomApp
