import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import FrontEnd from './fe/fe';
import Home from './fe/pages/home';
import Login from './fe/pages/login';
import About from './fe/pages/about';
import Service from './fe/pages/service';
import Contact from './fe/pages/contact';

import BackEnd from './be/be';
import Setting from './be/pages/setting';

export default function CustomApp() {
  return (
    <Router>
      <Routes>FrontEnd
        <Route path="/" element={<Login/>}>
          <Route index element={<Login/>}/>
        </Route>
        <Route path="/fe" element={<FrontEnd/>}>
            <Route index element={<Home/>}/>
            <Route path="/fe/about" element={<About/>}/>
            <Route path="/fe/service" element={<Service/>}/>
            <Route path="/fe/contact" element={<Contact/>}/>
        </Route>
        <Route path="/admin" element={<BackEnd/>}>
            <Route path="setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
