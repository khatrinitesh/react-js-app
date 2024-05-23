import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './components/nav';
import Footer from './components/footer';

export default function MainLayout() {
  return (
    <>
        <Navigation/>
        <div className='main_content'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}
