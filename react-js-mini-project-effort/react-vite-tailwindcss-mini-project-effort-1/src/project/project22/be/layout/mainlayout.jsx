import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';


export default function MainLayout() {
  return (
    <>
        <Sidebar/>
        <div className='main_content'>
            <Outlet/>
        </div>
    </>
  )
}
