import React from 'react';
import { Outlet } from 'react-router-dom';

import LeftSidebar from './component/leftsidebar';

export default function BackEndTemplate() {
  return (
    <>
    <div className='row'>
        <div className='col-3'>
          <LeftSidebar/>
        </div>
        <div className='col-9'>
          <div className='main_content'>
            <div className='container'>
              <Outlet/>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}
