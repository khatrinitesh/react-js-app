import React from "react";
import Typewriter from 'typewriter-effect';
const TypeWriterComp = () => {
  return (
    <>
        <Typewriter
        options={{
          strings: ['Hello, world!', 'Welcome to my site!', 'Enjoy your stay!'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          cursor: '|', // Custom cursor
          wrapperClassName: 'typewriter-text', // Custom class for styling
          onInit: (typewriter) => {
            console.log('Typewriter initialized');
          },
        }}
      />
    </>
  );
};

export default TypeWriterComp;
