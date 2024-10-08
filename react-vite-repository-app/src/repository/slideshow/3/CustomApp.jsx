import React, { useState } from "react";
import './custom.css';

const CustomApp = () => {
  return (
    <>
     <Carousel/> 
    </>
  );
}

export default CustomApp;

const Carousel = () => {
    const [currDeg, setCurrDeg] = useState(0);
  
    
  const rotate = (direction) => {
    if (direction === 'n') {
      setCurrDeg(currDeg - 60);
    } else if (direction === 'p') {
      setCurrDeg(currDeg + 60);
    }
  };

  
    return (
        <div className="container">
        <div
          className="carousel"
          style={{
            transform: `rotateY(${currDeg}deg)`,
            WebkitTransform: `rotateY(${currDeg}deg)`,
            MozTransform: `rotateY(${currDeg}deg)`,
            OTransform: `rotateY(${currDeg}deg)`,
          }}
        >
          {/* Carousel items */}
          <div className="a">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>A</div>
          </div>
          <div className="b">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>B</div>
          </div>
          <div className="c">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>C</div>
          </div>
          <div className="d">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>D</div>
          </div>
          <div className="e">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>E</div>
          </div>
          <div className="f">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>F</div>
          </div>
          <div className="g">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>JUS</div>
          </div>
          <div className="h">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>ERNEST</div>
          </div>
          <div className="i">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>HOLA</div>
          </div>
          <div className="j">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>QUE</div>
          </div>
          <div className="k">
            <div className="item" style={{ transform: `rotateY(${-currDeg}deg)` }}>TAL</div>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="next" onClick={() => rotate('n')}>
          Next
        </div>
        <div className="prev" onClick={() => rotate('p')}>
          Prev
        </div>
      </div>
    );
  };
  