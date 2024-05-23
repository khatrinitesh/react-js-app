import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
    const triggerButton = <button>Open Popover</button>;

    const popoverContent = (
      <div>
        <p>This is the content of the Popover.</p>
        <button>Click me!</button>
      </div>
    );

  return (
    <>
        <Popover trigger={triggerButton} content={popoverContent} />
    </>
  )
}

export default CustomApp

const Popover = ({ trigger, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const popoverRef = useRef(null);
  
    const togglePopover = () => {
      setIsVisible(!isVisible);
    };
  
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="popover-container">
        <div ref={popoverRef}>
          {React.cloneElement(trigger, { onClick: togglePopover })}
        </div>
        {isVisible && <div className="popover-content">{content}</div>}
      </div>
    );
  };