import React from 'react';
import Banner from '../components/Banner';

const Error = ({mainStyle}) => {
  return (
    <div className={`${mainStyle} mainContent`}>
        <Banner title="Error" desc="Lorem Ipsum"/>
    </div>
  )
}

export default Error;
