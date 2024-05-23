import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './custom.scss';

// FE
import Login from './fe/page/login';
import FrontEndTemplate from './fe/fe';
import Home from './fe/page/home';
import About from './fe/page/about';
import Contact from './fe/page/contact';
import Error from './error';

// BE
import BackEndTemplate from './be/be';
import Admin from './be/page/admin';


export default function CustomApp() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}>
          <Route index element={<Login/>}/>
        </Route>
        <Route path="/" element={<FrontEndTemplate/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>  
        <Route path="/admin" element={<BackEndTemplate/>}>
            <Route index element={<Admin/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </>
    
  )
}
