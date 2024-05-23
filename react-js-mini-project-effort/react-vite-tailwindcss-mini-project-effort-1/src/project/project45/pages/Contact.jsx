import React from 'react';
import Banner from '../components/Banner';

const Contact = ({mainStyle}) => {
  return (
    <div className={`${mainStyle} mainContent`}>
        <Banner title="Contact" desc="Lorem Ipsum"/>
    </div>
  )
}

export default Contact;
