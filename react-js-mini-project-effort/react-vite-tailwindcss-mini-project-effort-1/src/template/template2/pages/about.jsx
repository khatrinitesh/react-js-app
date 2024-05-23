import React,{useEffect} from 'react';
import AboutSection from '../components/about';

export default function About() {
  useEffect(() => {
    document.body.className = 'sub_page'
  })
  return (
    <>
      <AboutSection/>
    </>
  )
}
