import React from 'react';
import Banner from '../components/Banner';

const Service = ({mainStyle}) => {
  return (
    <div className={`${mainStyle} mainContent`}>
        <Banner title="Service" desc="Lorem Ipsum"/>
    </div>
  )
}

export default Service;
