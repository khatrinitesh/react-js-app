import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './assets/css/styles.css';


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Home from './pages/home';
import Resume from './pages/resume';
import Project from './pages/project';
import Contact from './pages/contact';
import ErrorPage from './pages/error';
import MainLayout from './mainlayout';


export default function CustomApp() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </Router>
  )
}

