import React from 'react';
//============= LIBRARY
import { Outlet } from 'react-router';

//============= COMPONENTS
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = () => {
  return (
    <>
    <Header/>
    <div className='mainContent'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout
