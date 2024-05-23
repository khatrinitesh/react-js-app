import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageOverlayTitle = () => {
    const imageUrl = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704175200&semt=sph';
    const altText = 'Description of the image';
    const title = 'Image Title';
    return (
        <>
            <ImageOverlayZoom imageUrl={imageUrl} altText={altText} title={title} />
        </>
    )
}

export default ImageOverlayTitle

const ImageOverlayZoom = ({ imageUrl, altText, title }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleZoomIn = () => setZoomLevel(zoomLevel + 0.1);
    const handleZoomOut = () => setZoomLevel(Math.max(zoomLevel - 0.1, 1));

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: `translate(-50%, -50%) scale(${zoomLevel})`,
        },
    };

    return (
        <div>
            <button onClick={openModal}>Open Image</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Image Overlay"
            >
                {title && <h2 className="overlay-title">{title}</h2>}
                <img
                    className="overlay-image"
                    src={imageUrl}
                    alt={altText}
                    onClick={closeModal}
                />
                <div className="zoom-buttons">
                    <button onClick={handleZoomIn}>Zoom In</button>
                    <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
            </Modal>
        </div>
    );
};


