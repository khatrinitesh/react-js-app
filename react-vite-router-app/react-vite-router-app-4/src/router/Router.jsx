import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Main from '../layout/main';
import NotFound from './../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Router