import React from 'react';
import Banner from './../layout/Banner';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const BtnClick = () => {
    navigate('/')
  }
  return (
    <div className='content'>
      <Banner bannerTitle='Contact' bannerDesc='Laborum reprehenderit amet anim occaecat veniam culpa.'/>
      <div className="container mx-auto">
        <BtnPrimary onClick={BtnClick}>Click to go homepage</BtnPrimary>
      </div>
    </div>
  );
}

export default Contact;
