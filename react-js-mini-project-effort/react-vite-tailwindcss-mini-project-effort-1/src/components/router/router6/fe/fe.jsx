import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

export default function FrontEnd() {
  return (
    <div>
        <h2>Front-End layout</h2>
      <Header/>
      <div className="main_content">
         <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
