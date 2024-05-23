import React,{useState} from 'react'

const SlideShowGalleryApp = () => {
    const images = [
        'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph', // Replace with your image URLs
        'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
        'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
      ];
  return (
    <>
    <SlideshowGallery images={images}/>      
    </>
  )
}

export default SlideShowGalleryApp;

const SlideshowGallery = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((prevImage) =>
        prevImage === 0 ? images.length - 1 : prevImage - 1
      );
    };
  
    return (
      <div className="slideshow-gallery">
        <div className="slide">
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    );
  };
