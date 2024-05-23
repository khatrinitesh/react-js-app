import React, { useState } from 'react';

const CustomApp = () => {
    return (
        <>
            <Counter />
        </>
    )
}

export default CustomApp

const Counter = () => {
    // Define state variables
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // Event handlers
    const handleIncrement = () => {
        setCount(count + step);
    };

    const handleDecrement = () => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0);
        setStep(1); // Reset the step as well
    };

    const handleStepChange = (e) => {
        const newStep = parseInt(e.target.value, 10)
        setStep(isNaN(newStep) ? 1 : newStep) // Ensure it's a valid number, default to 1 if not
    }


    return (
        <>
            <h1>Counter: {count}</h1>
            <label>
                Step:
                <input type="number" value={step} onChange={handleStepChange} />
            </label>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

