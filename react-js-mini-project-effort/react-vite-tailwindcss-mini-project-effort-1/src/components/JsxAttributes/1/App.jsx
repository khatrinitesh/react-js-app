import React, { useState } from 'react';

const CustomExample = () => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleClick = () => {
        setIsHighlighted(!isHighlighted);
    }

    const dynamicStyles = {
        backgroundColor: isHighlighted ? 'yellow' : 'white',
        padding: '10px',
        border: '1px solid black',
    };

    return (
        <>
            <h2 style={{ color: 'blue' }}>Hard Example with JSX Attributes</h2>
            <div
                style={dynamicStyles}
                className={isHighlighted ? 'highlighted' : ''}
                onClick={handleClick}
            >
                <p>This div has dynamic styles and a click event.</p>
            </div>
            <input type="text" placeholder="Enter your text" onChange={(e) => console.log(e.target.value)} />
            <br />
            <button
                disabled={isHighlighted}
                style={{ backgroundColor: isHighlighted ? 'gray' : 'green' }}
                onClick={() => alert('Button clicked!')}
            >
                {isHighlighted ? 'Disabled' : 'Click Me'}
            </button>
        </>
    )
}

export default CustomExample
