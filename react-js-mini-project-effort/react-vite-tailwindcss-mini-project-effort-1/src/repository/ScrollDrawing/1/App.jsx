import React, { useRef, useState } from 'react';
import './style.css';

const ScrollDrawingApp = () => {
    const canvasRef = useRef();
    const [drawing, setDrawing] = useState(false);

    const startDrawing = () => {
        setDrawing(true);
      };
    
      const stopDrawing = () => {
        setDrawing(false);
      };

      const draw = (e) => {
        if (!drawing) return;
    
        const context = canvasRef.current.getContext('2d');
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        context.fillStyle = '#000000'; // Set the drawing color
        context.fillRect(x, y, 5, 5); // Draw a small rectangle (you can customize this)
    
        // Additional drawing logic can be added based on your requirements
      };
  return (
    <div>
      <div className="scroll-drawing-container">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
      />
    </div>
    </div>
  )
}

export default ScrollDrawingApp
