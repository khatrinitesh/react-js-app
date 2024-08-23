import React from 'react';
import {  Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import LandscapeScreen from '../components/LandscapeScreen';

const MainLayout = () => {
 
  return (
    <>
    <div className='appContainer'>
      <Header/>
      <div className='mainContent py-6 bg-gray-400'>
        <Outlet/>
      </div>
      <Footer/>
      </div>
      <LandscapeScreen/>
    </>
  );
}

export default MainLayout;
