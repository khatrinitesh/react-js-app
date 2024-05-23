import React from 'react';
import './style.css';

const DisableTextSelectionApp = () => {
  return (
    <>
        <MyTextareaComponent/> 
    </>
  )
}

export default DisableTextSelectionApp

const MyTextareaComponent = () => {
    const textareaStyle = {
      resize: 'none'
    };
  
    return (
        <div className="no-select">
        <p>This text cannot be selected.</p>
      </div>
    );
  };
