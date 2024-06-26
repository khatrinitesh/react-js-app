import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import InfoSection from './components/info_section';
import Footer from './components/footer';

export default function MainLayout() {
  return (
    <>
      <div className='hero_area'>
        <Header/>
      </div>
      <div className='main_content'>
        <Outlet/>
      </div>
      <InfoSection/>
      <Footer/>
    </>
  )
}
