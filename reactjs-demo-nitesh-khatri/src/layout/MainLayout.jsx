import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
    <div className='appGrid'>
      <Header/>
      <div className='mainContent bg-[#92cace]'>
        <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
