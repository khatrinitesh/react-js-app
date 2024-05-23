import React, { useEffect, useState } from 'react';

const MediaQueriesApp = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.matchMedia('(max-width:768px)').matches;
            setIsSmallScreen(isSmall)
        };
        // initial check
        handleResize();

        // add event listener for window resize
        window.addEventListener('resize', handleResize)

        // clean up the event listener for window resize
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);// Empty dependency array ensures that the effect runs only once on mount


    return (
        <>

            {isSmallScreen ? 'This is a small screen (max-width: 768px).' : 'This is not a small screen (min-width: 769px).'}
        </>
    )
}

export default MediaQueriesApp


