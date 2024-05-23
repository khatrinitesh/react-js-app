import React from 'react'
import { Element } from 'react-scroll';

const ScrollSection = ({ id, children,actualCondition }) => {
    return (
      <Element name={id}>
      <section id={id} className={`h-auto md:h-full ${actualCondition ? 'bg-lightpurple' : 'bg-white'}`}>
        {children}
      </section>
    </Element>
    );
  };

export default ScrollSection