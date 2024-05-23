import React from 'react';


const ImageTextBlockApp = () => {
    const imageData = [
        {
            id: 1,
            imageSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=sph',
            altText: 'Image 1',
            textContent: 'Text block for Image 1.',
        },
        {
            id: 2,
            imageSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=sph',
            altText: 'Image 2',
            textContent: 'Text block for Image 2.',
        },
    ]

    return (
        <>
            <div className="image-text-grid">
                {imageData.map(({ id, imageSrc, altText, textContent }) => (
                    <ImageTextBlock
                        key={id}
                        imageSrc={imageSrc}
                        altText={altText}
                        textContent={textContent}
                    />
                ))}
            </div>
        </>
    )
}

export default ImageTextBlockApp;

const ImageTextBlock = ({ imageSrc, altText, textContent }) => {
    return (
        <>
            <div className="image-text-block">
                <img src={imageSrc} alt={altText} className="image" />
                <div className='text-block'>
                    <p>{textContent}</p>
                </div>
            </div>
        </>
    )
}

