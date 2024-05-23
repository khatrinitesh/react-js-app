import React from 'react';
import './custom.css';

const ShakeImgApp = () => {
    return (
        <>
            <ShakeImage />
        </>
    )
}

export default ShakeImgApp

const ShakeImage = () => {
    return (
        <div className="shake-container">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/841/162/small/geometric-ethnic-seamless-pattern-traditional-native-striped-american-mexican-style-design-for-background-illustration-wallpaper-fabric-batik-carpet-clothing-embroidery-free-vector.jpg" alt="Shake Image" className="shake-image" />
        </div>
    );
};
