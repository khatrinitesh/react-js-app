import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

// Below FrontEnd
import FrontEndApp from './fe/fe';
import Home from './fe/pages/home';
import About from './fe/pages/about';
import Service from './fe/pages/service';
import Contact from './fe/pages/contact';

// Below BackEnd
import BackEndApp from './be/be';


// Below error page
import Error from './fe/pages/error';


export default function AppFeBe() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<FrontEndApp/>}>
                <Route index element={<Home/>}/>
                <Route path="/about"  element={<About/>}/>
                <Route path="/service"  element={<Service/>}/>
                <Route path="/contact"  element={<Contact/>}/>
            </Route>
            <Route path="/admin" element={<BackEndApp/>}>
                <Route index element={BackEndApp}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  )
}
