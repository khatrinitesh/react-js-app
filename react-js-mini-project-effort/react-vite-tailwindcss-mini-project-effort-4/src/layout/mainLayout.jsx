import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from './../components/footer';
import Header from './../components/header';

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
