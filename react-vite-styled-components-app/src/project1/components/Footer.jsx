import React from 'react';
import { FooterComp } from '../styleComponents/custom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <FooterComp>
      <p>&copy; Copyright {currentYear}</p>
    </FooterComp>
  )
}

export default Footer
