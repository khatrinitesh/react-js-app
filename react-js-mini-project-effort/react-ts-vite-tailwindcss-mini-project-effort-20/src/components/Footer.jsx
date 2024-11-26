import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='footer py-[20px] bg-black'>
        <div className="container mx-auto text-center">
            <p className='text-white'>&copy; copyright {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
