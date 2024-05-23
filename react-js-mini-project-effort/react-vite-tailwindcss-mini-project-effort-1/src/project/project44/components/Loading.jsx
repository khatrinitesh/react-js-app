import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay with setTimeout
        const delay = 2000; // 2000 milliseconds (2 seconds)

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        // Cleanup the timer on component unmount or if dependencies change
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures useEffect runs once on mount
    return (
        <>
            {isLoading && <p>Loading adasdd...</p>}
        </>
    )
}

export default Loading
