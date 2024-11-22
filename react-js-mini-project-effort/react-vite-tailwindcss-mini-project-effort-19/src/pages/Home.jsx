import React from 'react';
import Banner from './../layout/Banner';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const BtnClick = () => {
    navigate('/about')
  }
  return (
    <div className='content'>
      <Banner bannerTitle='Home' bannerDesc='Laborum reprehenderit amet anim occaecat veniam culpa.'/>
      <div className="container mx-auto">
        <BtnPrimary onClick={BtnClick}>Click next</BtnPrimary>
      </div>
    </div>
  );
}

export default Home;
