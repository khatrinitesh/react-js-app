import React from 'react';

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black py-[20px]'>
      <div className="container mx-auto text-center">
        <p className='text-white'>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
