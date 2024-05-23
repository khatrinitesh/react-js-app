import React from 'react'

const StickySocialBarApp = () => {
  return (
    <>
      <SocialBar/>
    </>
  )
}

export default StickySocialBarApp;

const SocialBar = () => {
    return (
      <div className="social-bar">
        <a href="#" className="social-icon">
          <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="Facebook" />
        </a>
        <a href="#" className="social-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/665/665222.png" alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-instagram-social-media-icon-png-image_9015420.png" alt="Instagram" />
        </a>
      </div>
    );
  };
