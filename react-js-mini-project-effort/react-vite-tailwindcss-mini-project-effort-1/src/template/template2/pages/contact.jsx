import React,{useEffect} from 'react';
import ContactSection from '../components/contact';

export default function Contact() {
  useEffect(() => {
    document.body.className = 'sub_page'
  })
  return (
    <>
      <ContactSection/>
    </>
  )
}
