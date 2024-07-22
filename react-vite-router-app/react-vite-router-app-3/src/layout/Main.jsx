import React from 'react';
// library
import { Outlet } from 'react-router-dom';
// components
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
     <Header/>
      <div className='mainContent grow'>
        <Outlet/>
      </div>
     <Footer/>
    </>
  )
}

export default Main