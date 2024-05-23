import React, { useState } from 'react'
import './custom.css';

const FlipImgApp = () => {
    return (
        <>
            <FlipImage />
        </>
    )
}

export default FlipImgApp

const FlipImage = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flipper">
                <div className="front">
                    {/* Replace 'front-image.jpg' with the path to your front image */}
                    <img src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="Front Image" />
                </div>
                <div className="back">
                    {/* Replace 'back-image.jpg' with the path to your back image */}
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/841/162/small/geometric-ethnic-seamless-pattern-traditional-native-striped-american-mexican-style-design-for-background-illustration-wallpaper-fabric-batik-carpet-clothing-embroidery-free-vector.jpg" alt="Back Image" />
                </div>
            </div>
        </div>
    );
};
