import React from 'react'

const TurnOffSpeckApp = () => {
    return (
        <>
            <MyComponent />
        </>
    )
}

export default TurnOffSpeckApp

const MyComponent = () => {
    return (
        <textarea type="text" spellCheck="true" placeholder="Type here..." />
    );
};

