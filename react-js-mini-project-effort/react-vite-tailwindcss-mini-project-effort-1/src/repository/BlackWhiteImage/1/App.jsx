import React, { useEffect, useRef } from 'react';

const BlackWhiteImgApp = () => {
    return (
        <>
            <BlackAndWhiteImage />
        </>
    )
}

export default BlackWhiteImgApp;


const BlackAndWhiteImage = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const convertToBlackAndWhite = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const image = imageRef.current;

            if (image.complete) {
                // Ensure the image has loaded before manipulating it
                canvas.width = image.width;
                canvas.height = image.height;

                context.drawImage(image, 0, 0, image.width, image.height);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = average;
                    data[i + 1] = average;
                    data[i + 2] = average;
                }

                context.putImageData(imageData, 0, 0);
                image.src = canvas.toDataURL();
            } else {
                // Retry after a short delay if the image is not yet loaded
                setTimeout(convertToBlackAndWhite, 100);
            }
        };

        convertToBlackAndWhite();
    }, []);

    return (
        <div className="image-container">
            <img
                ref={imageRef}
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704250800&semt=sph"
                alt="Your Image"
            />
        </div>
    );
};


