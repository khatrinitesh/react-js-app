import React from 'react'

const ImgOverlaySliderApp = () => {

    const imageUrl = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=sph';
    const altText = 'Description of the image';


  return (
    <>
      <div>
        <h1>Your React App</h1>
        <ImageOverlay imageUrl={imageUrl} altText={altText} />
        </div>
    </>
  )
}

export default ImgOverlaySliderApp

const ImageOverlay = ({ imageUrl, altText }) => {
    return (
      <div className="image-container">
        <img className="image" src={imageUrl} alt={altText} />
        <div className="overlay"></div>
      </div>
    );
  };
