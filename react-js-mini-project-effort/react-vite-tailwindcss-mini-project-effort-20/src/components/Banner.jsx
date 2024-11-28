import React from 'react';

const Banner = ({bannerStyle,title,desc}) => {
  return (
    <div className={`${bannerStyle} bg-amber-200  bannerContent py-[50px]`}>
      <div className="container mx-auto">
      <h3 className='font-bold text-[24px]'>{title}</h3>
      <p className='text-[18px]'>{desc}</p>
      </div>
    </div>
  );
}

export default Banner;
