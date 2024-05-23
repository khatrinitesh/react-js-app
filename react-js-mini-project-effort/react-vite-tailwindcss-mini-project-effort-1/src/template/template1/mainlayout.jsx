import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from "./globalstyles";
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrolltotop';

export default function MainLayout() {
  return (
    <>
        <Header/>
        <GlobalStyle /> 
        <div className='main_content'>
            <Outlet/>
        </div> 
        <Footer />
        <ScrollToTop /> 
    </>
  )
}
