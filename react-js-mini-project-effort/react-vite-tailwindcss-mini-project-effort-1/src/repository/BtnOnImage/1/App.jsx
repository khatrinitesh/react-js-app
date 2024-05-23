import React from 'react';
import './style.css';

const BtnOnImageApp = () => {
  return (
    <>
      <ButtonOnImage/>
    </>
  )
}

export default BtnOnImageApp

const ButtonOnImage = () => {
  return (
    <div className="image-container">
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph" alt="Your Image" className="image" />
      <button className="overlay-button">Click Me</button>
    </div>
  );
};
