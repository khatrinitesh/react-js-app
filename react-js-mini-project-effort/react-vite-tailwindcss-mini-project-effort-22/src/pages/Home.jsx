import React from 'react';
import Banner from '../components/Banner';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/about')
  }
  return (
    <div className='content'>
      <Banner title='Home' desc='Consectetur proident in ipsum reprehenderit do esse ea ad quis.'/>
      <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
    </div>
  );
}

export default Home;
