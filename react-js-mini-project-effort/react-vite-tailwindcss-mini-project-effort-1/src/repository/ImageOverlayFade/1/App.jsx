import React from 'react'

const ImgOverlayFadeApp = () => {

    const imageUrl = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=sph';
    const altText = 'Description of the image';
  return (
    <>
      <ImageOverlay imageUrl={imageUrl} altText={altText}/>
    </>
  )
}

export default ImgOverlayFadeApp

const ImageOverlay = ({imageUrl,altText}) => {
    return(
        <>
        <div className="image-container">
            <img className="image" src={imageUrl} alt={altText} />
            <div className="overlay"></div>
        </div>
        </>
    )
}
