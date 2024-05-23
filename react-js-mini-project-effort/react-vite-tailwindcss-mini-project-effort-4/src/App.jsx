import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

// layout
import MainLayout from './layout/mainLayout';


// pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
