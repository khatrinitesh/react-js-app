import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

const MainContent = () => {
  return (
    <>
    <Header/>
    <div className='mainContent'>
      <div className='container mx-auto'>
        <Outlet/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default MainContent
