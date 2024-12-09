import React from 'react';
import Banner from './../components/Banner';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/contact')
  }
  return (
    <div className='content'>
      <Banner title='Service' desc='Consectetur proident in ipsum reprehenderit do esse ea ad quis.'/>
      <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
    </div>
  );
}

export default Service;
