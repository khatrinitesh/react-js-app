import React from 'react';
import Banner from '../layout/Banner';
import FillForm from '../components/FillForm';

const Contact = () => {
  return (
    <div className='content'>
      <Banner title="Contact" description="Aute exercitation do sint cillum commodo eiusmod Lorem officia in do quis Lorem exercitation."/>
      <div className="container mx-auto">
      <FillForm/>
      </div>
    </div>
  );
}

export default Contact;
