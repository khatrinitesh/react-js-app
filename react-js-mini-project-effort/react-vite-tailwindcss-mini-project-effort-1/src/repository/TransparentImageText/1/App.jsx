import React from 'react';
import './custom.css';

const TransparentImgTxt = () => {
    return (
        <>
            <div className="container">
                <img src="your-image.jpg" alt="Background Image" className="background-image" />
                <div className="text-container">
                    <h1>Your Transparent Text</h1>
                    <p>Additional content...</p>
                </div>
            </div>

        </>
    )
}

export default TransparentImgTxt
