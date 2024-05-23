import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      Admin
      <div className='main_content'>
        <Outlet/>
      </div>
    </div>
  )
}
