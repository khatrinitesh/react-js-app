import React,{useEffect} from 'react';
import ServiceSection from '../components/service';

export default function Service() {
  useEffect(() => {
    document.body.className = 'sub_page'
  })
  return (
    <>
      <ServiceSection/>
    </>
  )
}
