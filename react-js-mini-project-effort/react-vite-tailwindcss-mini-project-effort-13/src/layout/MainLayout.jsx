import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({mainLayoutStyle}) => {
  return (
    <>
    <div className='appLayout bg-gray-200'>
      <Header/>
      <div className={`${mainLayoutStyle} mainContent`}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default MainLayout;
