import React from 'react';
// lirbary
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/header';
import Footer from './../components/footer';


const MainLayout = () => {
  return (
    <>
    {/* START HEADER */}
      <Header/>
      {/* END HEADER */}

      {/* START MAIN CONTENT */}
       <div className='mainContent'>
        <div className='container mx-auto bg-[#f9f9f9] h-[100vh]'>
          <Outlet/>
        </div>
       </div>
       {/* END MAIN CONTENT */}


       {/* START FOOTER */}
      <Footer/>
      {/* END FOOTER */}
    </>
  )
}

export default MainLayout
