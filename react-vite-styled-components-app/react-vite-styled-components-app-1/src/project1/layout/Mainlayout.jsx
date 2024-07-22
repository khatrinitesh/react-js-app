import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './../components/Header';
import Footer from './../components/Footer';
import { MainContent } from '../styleComponents/custom';

const Mainlayout = () => {
  return (
    <>
     <Header/>
     <MainContent>
        <Outlet/>
     </MainContent>
     <Footer/> 
    </>
  )
}

export default Mainlayout
