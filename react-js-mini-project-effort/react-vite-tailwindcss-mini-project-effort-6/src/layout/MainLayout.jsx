import React from 'react'
// components
import Header from './Header';
import Footer from "./Footer";
// library
import { Outlet } from 'react-router-dom';

const menuItems = [
  {label:'Home',url:'/'},
  {label:'About',url:'/about'},
  {label:'Service',url:'/service'},
  {label:'Contact',url:'/contact'},
];

const MainLayout = () => {
  return (
    <>
      <Header listNav={menuItems} />
      <div className='mainContent grow'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout
