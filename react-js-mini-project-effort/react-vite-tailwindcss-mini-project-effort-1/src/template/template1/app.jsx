import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/home';
import MainLayout from './mainlayout';


export default function TemplateApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
        
      </Router>
  )
}
