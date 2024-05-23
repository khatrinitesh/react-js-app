import React, { useEffect, useState } from 'react';
import './style.css';

const ParallaxApp = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="parallax-container">
                <div className="parallax-bg" style={{ transform: `translateY(${offset * 0.5}px)` }}></div>
                <div className="parallax-content">
                    <h1>Your Parallax Content</h1>
                    <p>This is some content in the parallax section.</p>
                </div>
            </div>
        </>
    )
}

export default ParallaxApp
