import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
    <div className='appLayout'>
     <Header/> 
     <div className='mainContent h-[calc(100vh-88px)]'>
        <Outlet/>
     </div>
     <Footer/>
     </div>
    </>
  );
}

export default MainLayout;