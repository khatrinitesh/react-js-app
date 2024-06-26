import React from 'react';
// react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// components
import Navigation from './components/Navigation';

function App() {
  

  return (
    <Router>
      <Navigation/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
    </Router>
  )
}

export default App
