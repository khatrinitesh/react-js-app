import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/Contact';
import MainLayout from './MainLayout';

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
