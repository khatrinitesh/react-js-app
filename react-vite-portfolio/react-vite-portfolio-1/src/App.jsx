import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import BigHeader  from './components/BigHeader';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollBackTop';
function App() {

  return (
    <Router>
     <BigHeader/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Section7/>
     <Section8/>
     <Footer/>
     <ScrollToTopButton/>
    </Router>
  )
}

export default App
