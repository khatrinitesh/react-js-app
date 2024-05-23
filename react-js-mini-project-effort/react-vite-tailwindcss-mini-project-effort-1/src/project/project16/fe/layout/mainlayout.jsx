import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../component/header';
import Footer from '../component/footer';

export default function MainLayout() {
  return (
    <>
      <Header/>
       <div className='main_content'>
        <div className='container'>
          <Outlet/>
        </div>
       </div>
      <Footer/>
    </>
  )
}
