import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaLinkedin ,FaYoutube,FaGoogle ,FaInstagram   } from "react-icons/fa";


const IconBarApp = () => {
  return (
    <>
       <div className="icon-bar">
            <Link to="https://www.fb.com/" target="_blank" className='linkurl'>
                <FaFacebook />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank" className='linkurl'>
                <FaLinkedin />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank" className='linkurl'>
                <FaYoutube />
            </Link>
            <Link to="https://www.google.com/" target="_blank" className='linkurl'>
                <FaGoogle />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className='linkurl'>
                <FaInstagram />
            </Link>
        </div>
    </>
  )
}

export default IconBarApp
