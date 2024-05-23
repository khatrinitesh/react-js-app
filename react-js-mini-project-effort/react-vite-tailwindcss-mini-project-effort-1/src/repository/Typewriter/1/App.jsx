import React, { useState, useEffect } from 'react';

const TypeWriterApp = () => {
    const textToType = "Hello, React Typewriter!";
    const typingSpeed = 100; // Adjust the speed as needed (in milliseconds)
    return (
        <>
            <Typewriter text={textToType} speed={typingSpeed} />
        </>
    )
}

export default TypeWriterApp

const Typewriter = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text[index]);
                index++;
                setTimeout(type, speed);
            }
        };

        type();

        // Cleanup the timer on component unmount
        return () => clearTimeout(type);
    }, [text, speed]);

    return (
        <div>
            <h1>{displayText}</h1>
        </div>
    );
};
