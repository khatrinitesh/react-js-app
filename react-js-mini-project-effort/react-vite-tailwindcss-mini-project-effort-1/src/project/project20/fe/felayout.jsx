import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../fe/components/header';
import Footer from '../fe/components/footer';

export default function FELayout() {
  return (
    <>
      <Header/>
       <div className='main_content'>
        <Outlet/>
       </div>
      <Footer/>
    </>
  )
}
