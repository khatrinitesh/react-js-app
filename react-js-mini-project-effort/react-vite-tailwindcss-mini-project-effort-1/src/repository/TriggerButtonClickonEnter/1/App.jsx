import React from 'react'

const TriggerButtonApp = () => {
    return (
        <>
            <EnterButtonTrigger />
        </>
    )
}

export default TriggerButtonApp

const EnterButtonTrigger = () => {
    const handleClick = () => {
        // Your button click logic here
        alert('Button Clicked!');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Press Enter to trigger button click"
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};
