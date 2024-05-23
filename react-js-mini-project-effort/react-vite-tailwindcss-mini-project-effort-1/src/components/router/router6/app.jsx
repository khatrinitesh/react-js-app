import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// FRONTEND
import FrontEnd from './fe/fe';
import Home from './fe/pages/home';
import About from './fe/pages/about';

import Error from './error';

// BACKEND
import BackEnd from './be/be';
import Admin from './be/pages/admin';
import Setting from './be/pages/setting'

export default function CustomApp() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<FrontEnd/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
            <Route path="/admin" element={<BackEnd/>}>
                <Route index element={<Admin/>}/>
                <Route path="setting" element={<Setting/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  )
}
