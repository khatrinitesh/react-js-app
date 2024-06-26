import React from 'react';
import { Outlet } from 'react-router-dom';

import Header  from '../components/header';
import Footer  from '../components/footer';
import ErrorBoundary from '../components/errorboundaries';

export default function MainLayout() {
  return (
    <>
    <ErrorBoundary>
     <Header/>  
     <div className='main_content'>
        <div className='container'>
            <Outlet/>
        </div>
     </div>
      <Footer/>
      </ErrorBoundary>
    </>
  )
}
