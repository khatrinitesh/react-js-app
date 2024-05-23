import React, { useState } from 'react';
import './style.css';

const LoadingBtnApp = () => {
  return (
    <>
      <LoadingButton/>
    </>
  )
}

export default LoadingBtnApp

const LoadingButton = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = () => {
      setIsLoading(true);
      // Simulate an asynchronous action (e.g., API request) with a timeout
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulating a 2-second delay
    };
  
    return (
      <>
      <button className='loading-button' disabled={isLoading} onClick={handleClick}>
        {isLoading ? 'Loading...' : 'Click me'}</button>
        </>
    );
};
