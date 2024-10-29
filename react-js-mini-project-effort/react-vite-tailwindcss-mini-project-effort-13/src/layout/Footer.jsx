import React from 'react';

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black p-[10px] text-white'>
      <div className="container mx-auto">
        <p>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
