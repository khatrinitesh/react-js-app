import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div className='mainContent'>
        <Outlet/>
      </div>
    </>
  )
}

export default MainLayout
