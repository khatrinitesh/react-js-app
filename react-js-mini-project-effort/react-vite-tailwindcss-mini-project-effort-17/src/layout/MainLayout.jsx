import React from 'react';
// components
import Header from './Header';
import Footer from './Footer';
// library
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='appLayout h-[100vh]'>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
