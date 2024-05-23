import React, { useState } from 'react'

const CustomApp = () => {
    const wallpaper = [
        'https://placehold.co/600x400',
        'https://placehold.co/300x400',
        'https://placehold.co/200x400',
      ];
  return (
    <div>
      <Carousel images={wallpaper}/>
    </div>
  )
}

export default CustomApp

const Carousel = ({images}) => {
    const [currentImage,setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
    return(
        <div className="carousel-container relative overflow-hidden w-full">
            <button onClick={handlePrev} className="carousel-nav-button absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
            &lt;
            </button>
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-auto" />
            <button onClick={handleNext} className="carousel-nav-button absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
            &gt;
            </button>
      </div>
    )
}