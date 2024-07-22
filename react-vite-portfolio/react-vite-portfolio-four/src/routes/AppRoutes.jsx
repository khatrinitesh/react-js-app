import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from '../pages/Home';
import Legal from '../pages/Legal';
import NotFound from '../pages/NotFound';
import Appointment from './../pages/Appointment';

const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes