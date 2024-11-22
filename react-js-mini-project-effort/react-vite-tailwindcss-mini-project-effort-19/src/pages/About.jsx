import React from 'react';
import Banner from './../layout/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const About = () => {
  const navigate = useNavigate();

  const BtnClick = () => {
    navigate('/service')
  }
  return (
    <div className='content'>
      <Banner bannerTitle='About' bannerDesc='Laborum reprehenderit amet anim occaecat veniam culpa.'/>
      <div className="container mx-auto">
        <BtnPrimary onClick={BtnClick}>Click next</BtnPrimary>
      </div>
    </div>
  );
}

export default About;
