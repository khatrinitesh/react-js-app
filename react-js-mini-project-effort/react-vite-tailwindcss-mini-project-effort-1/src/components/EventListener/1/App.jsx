import React from 'react'

const CustomApp = () => {
    return (
        <>
            <MyComponent />
        </>
    )
}

export default CustomApp

const MyComponent = () => {
    const handleClick = () => {
        console.log('Button clicked!');
        // Your logic here
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

