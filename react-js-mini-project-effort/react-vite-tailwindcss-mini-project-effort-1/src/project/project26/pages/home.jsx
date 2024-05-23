import React from 'react';
import Banner from '../components/banner';
import UseEffectApp from '../components/useffect/1/app';
import TextAreaApp from '../components/textarea-with-character-limit/1/app';
import IconBarApp from '../components/iconbar/1/app';
import MenuIconApp from '../components/menuicon/1/app';
import AccordionApp from '../components/accordion/1/app';

export default function Home() {
  return (
    <div className='content'>
        <Banner title="Home page" desc="Lorem Ipsum"/>
        <AccordionApp/>
        {/* <MenuIconApp/> */}
        {/* <IconBarApp/> */}
        {/* <TextAreaApp/> */}
        {/* <UseEffectApp/> */}
    </div>
  )
}
