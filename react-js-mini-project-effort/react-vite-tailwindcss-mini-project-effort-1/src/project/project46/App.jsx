import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css'

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
// LAYOUT
import MainLayout from "./layout/layout";

const CustomApp = () => {

   
  return (
    <>
        
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </>
    
  )
}

export default CustomApp
