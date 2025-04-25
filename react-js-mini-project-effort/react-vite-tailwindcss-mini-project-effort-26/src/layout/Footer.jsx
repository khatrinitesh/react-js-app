import React from 'react';

const Footer = () => {
    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
            Footer 
            <p>&copy; Copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
