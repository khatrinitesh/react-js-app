import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      {/* START HEADER */}   
      <Header/>
      {/* END HEADER */}

      {/* START MAIN CONTENT */}
      <Outlet/>
      {/* END MAIN CONTENT */}

      {/* START FOOTER */}
      <Footer/>
      {/* END FOOTER */}
    </>
  )
}

export default MainLayout
