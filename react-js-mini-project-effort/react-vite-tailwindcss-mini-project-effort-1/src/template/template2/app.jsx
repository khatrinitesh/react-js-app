import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import './css/style.css';

import "bootstrap/dist/js/bootstrap.js";

import MainLayout from './mainlayout';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Blog from './pages/blog';
import Contact from './pages/contact';

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
