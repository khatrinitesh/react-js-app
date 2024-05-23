import React, { useState, useEffect } from 'react';
import './style.css';

const ShrinkHeaderOnScrollApp = () => {
    return (
        <>
            <ResizableHeader />
        </>
    )
}

export default ShrinkHeaderOnScrollApp

const ResizableHeader = () => {
    const [headerSize, setHeaderSize] = useState('100px');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Set the header size based on the scroll position (adjust values as needed)
            const newSize = Math.max(100 - scrollPosition, 50) + 'px';
            setHeaderSize(newSize);
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <header className="resizable-header" style={{ height: headerSize }}>
            <h1>Resizable Header</h1>
        </header>
    );
};
