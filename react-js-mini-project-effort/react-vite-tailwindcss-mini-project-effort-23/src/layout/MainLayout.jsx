import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;
