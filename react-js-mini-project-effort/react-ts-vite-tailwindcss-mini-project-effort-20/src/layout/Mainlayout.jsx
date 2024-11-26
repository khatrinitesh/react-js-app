import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <>
    <div className='appLayout'>
      <Header/>
       <div className='mainContent h-[calc(100vh-128px)]'>
            <Outlet/>
       </div>
      <Footer/>
      </div>
    </>
  );
}

export default Mainlayout;
