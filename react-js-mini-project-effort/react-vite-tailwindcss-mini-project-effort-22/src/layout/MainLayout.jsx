import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div className='mainContent min-h-[calc(100vh-108px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;
