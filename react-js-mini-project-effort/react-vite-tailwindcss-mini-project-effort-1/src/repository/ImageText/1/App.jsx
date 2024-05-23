import React from 'react'

const ImageTextApp = () => {
    return (
        <>
            <ImageWithText />
        </>
    )
}

export default ImageTextApp

const ImageWithText = () => {
    return (
        <div className="image-container h-auto">
            <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=sph"
                alt="Your Image"
                className="image-with-text"
            />
            <div className="text-overlay">Your Text Here</div>
        </div>
    );
};
