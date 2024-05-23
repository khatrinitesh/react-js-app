import React from 'react';
import './custom.css';

const StickyImageApp = () => {
    return (
        <>
            <StickyImage />
        </>
    )
}

export default StickyImageApp

const StickyImage = () => {
    return (
        <div className="sticky-container">
            <div className="sticky-image">
                {/* Replace 'image.jpg' with the path to your image */}
                <img src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="Sticky Image" />
            </div>
            <div className="content">
                {/* Your content goes here */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
};

