import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


import Home from './fe/pages/home';
import About from './fe/pages/about';
import Service from './fe/pages/service';
import Contact from './fe/pages/contact';
import Error from './fe/pages/error';
import FrontEndApp from './fe/fe';


import BackEndApp from './be/be';
import Admin from './be/pages/admin';
import Admin2 from './be/pages/admin2';

import "bootstrap/dist/css/bootstrap.css";

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontEndApp/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/admin" element={<BackEndApp/>}>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/admin2" element={<Admin2/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}
