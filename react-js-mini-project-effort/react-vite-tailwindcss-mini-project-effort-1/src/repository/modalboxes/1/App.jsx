import React, { useState } from 'react'

const CustomModalApp = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <ModalApp isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default CustomModalApp

const ModalApp = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <div className="modal">
                        <button className="close-button" onClick={onClose}>
                            Close
                        </button>
                        <div className="modal-content">
                            {/* Your modal content goes here */}
                            <h2>Modal Title</h2>
                            <p>This is the modal content.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
