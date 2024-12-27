import React from 'react';

const Footer = () => {
    const currentfullYear = new Date().getFullYear();   
  return (
    <footer className='footer bg-black py-[20px]'>
      <div className="container mx-auto">
        <p>&copy; copyright {currentfullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
