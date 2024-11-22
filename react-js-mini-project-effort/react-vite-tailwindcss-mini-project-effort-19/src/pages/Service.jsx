import React from 'react';
import Banner from './../layout/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Service = () => {
  const navigate = useNavigate();

  const BtnClick = () => {
    navigate('/contact')
  }
  return (
    <div className='content'>
      <Banner bannerTitle='Service' bannerDesc='Laborum reprehenderit amet anim occaecat veniam culpa.'/>
      <div className="container mx-auto">
        <BtnPrimary onClick={BtnClick}>Click next</BtnPrimary>
      </div>
    </div>
  );
}

export default Service;
