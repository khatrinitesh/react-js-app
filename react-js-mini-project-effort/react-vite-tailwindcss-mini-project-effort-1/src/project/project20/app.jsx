import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// BELOW FRONT END DEVELOPER
import FELayout from './fe/felayout';
import Home from './fe/pages/home';
import About from './fe/pages/about';
import Service from './fe/pages/service';
import Contact from './fe/pages/contact';
import Error from './fe/pages/error';

// BELOW BACK END DEVELOPER
import BELayout from './be/belayout';
import Admin from './be/admin';

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FELayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/admin' element={<BELayout/>}>
            <Route index element={<Admin/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}
