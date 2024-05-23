import React from 'react';
import Analytics from './components/analytics';
import Cards from './components/cards';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Newsletter from './components/newsletter';
import './assets/css/custom.css';


export default function CustomApp() {
  return (
    <>
        <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  )
}
