import React, { useEffect } from 'react';
import ServiceSection from '../components/service';
import AboutSection from '../components/about';
import BlogSection from '../components/blog';
import ContactSection from '../components/contact';
import HeroSection from '../components/herosection';

export default function Home() {
 
  return (
    <>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <BlogSection/>
      <ContactSection/>
    
    </>
  )
}
