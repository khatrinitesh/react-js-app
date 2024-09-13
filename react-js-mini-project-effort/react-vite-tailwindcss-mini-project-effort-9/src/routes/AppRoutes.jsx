import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './../pages/home';
import About from './../pages/about';
import Contact from '../pages/contact';

const AppRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Redirect any unknown routes to the home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
  );
}

export default AppRoutes;
