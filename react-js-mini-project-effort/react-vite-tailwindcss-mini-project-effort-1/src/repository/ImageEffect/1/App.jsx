import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageEffectApp = () => {
    return (
        <>
            <ImageEffectWithLightbox />
        </>
    )
}

export default ImageEffectApp

const ImageEffectWithLightbox = () => {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const imageSrc = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=sph';

    return (
        <div>
            <img
                src={imageSrc}
                alt="Your Image"
                onClick={() => setLightboxIsOpen(true)}
            />
            {lightboxIsOpen && (
                <Lightbox
                    mainSrc={imageSrc}
                    onCloseRequest={() => setLightboxIsOpen(false)}
                />
            )}
        </div>
    );
};

