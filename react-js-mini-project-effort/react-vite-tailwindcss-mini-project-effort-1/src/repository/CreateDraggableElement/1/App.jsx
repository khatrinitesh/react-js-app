import React, { useState } from 'react';

const DraggableApp = () => {

    return (
        <>
            <DraggableComponent />
        </>
    )
}

export default DraggableApp

const DraggableComponent = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 })


    const handleMouseUp = () => {
        setIsDragging(false);
    };


    const handleMouseDown = (e) => {
        setIsDragging(true);
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const dx = e.clientX - position.x;
        const dy = e.clientY - position.y;

        setPosition((prevPosition) => ({
            x: prevPosition.x + dx,
            y: prevPosition.y + dy,
        }));
    };
    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    border: '1px solid #000',
                    padding: '1rem',
                    backgroundColor: '#FFF',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                Drag me!
            </div>
        </>
    )
}
