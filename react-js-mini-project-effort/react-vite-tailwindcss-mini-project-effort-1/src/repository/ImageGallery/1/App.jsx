import React, { useState } from 'react';

const ImgGalleryApp = () => {

  const imageUrls = [
    'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fw%2FZHXwa2&psig=AOvVaw1ln0L4NnLZvQKQ4KIQ5Ri9&ust=1704209954904000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDD6e3CvIMDFQAAAAAdAAAAABAI', 'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg', 
    'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg', 'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg', 'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg', 'https://t4.ftcdn.net/jpg/05/57/57/63/360_F_557576322_am5DuFwdo7GNMlKh3kCfTvKVxDMaKPNL.jpg',
  ];

  return (
    <>
      <ImageGallery images={imageUrls}/>
    </>
  )
}

export default ImgGalleryApp

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openLightbox = (imageUrl) => {
      setSelectedImage(imageUrl);
    };
  
    const closeLightbox = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => openLightbox(imageUrl)}
          />
        ))}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Lightbox" />
              <button className="close-button" onClick={closeLightbox}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };


