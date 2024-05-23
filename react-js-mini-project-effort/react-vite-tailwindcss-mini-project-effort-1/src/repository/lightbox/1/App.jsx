import React, { useState } from 'react';

const LightBoxApp = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

  const imageUrls = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph', 
    'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg', 
    'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg']; 
    // Replace with your image URLs

  return (
    <>
    <h1>Your Content Goes Here</h1>
    <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
        <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(imageUrl)}
        />
        ))}
    </div>
    <Modal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImage} />
    </>
  )
}

export default LightBoxApp;

const Modal = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt="Modal" />
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    );
  };
  
