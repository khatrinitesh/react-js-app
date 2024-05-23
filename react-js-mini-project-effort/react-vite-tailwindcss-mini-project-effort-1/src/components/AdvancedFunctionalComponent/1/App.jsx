import React, { useState, useEffect } from "react";

const CustomApp = () => {
    return (
        <>
            <AdvancedComp />
        </>
    )
}

export default CustomApp

const AdvancedComp = () => {
    // State using the useState hook
    const [count, setCount] = useState(0);

    // useEffect hook to perform side effects
    useEffect(() => {
        console.log(`Component is mounted or updated. Current count: ${count}`);

        // Cleanup function for componentWillUnmount
        return () => {
            console.log(`Component will unmount. Clean up here if needed.`);
        }
    }, [count])

    const handleInc = () => {
        setCount(count + 1)
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleInc}>Increment Count</button>
        </>
    )
}
