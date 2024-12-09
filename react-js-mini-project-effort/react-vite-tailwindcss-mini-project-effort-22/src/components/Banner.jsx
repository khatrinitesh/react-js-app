import React from 'react';

const Banner = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-400`}>
      <div className="container mx-auto">
        <h3 className='text-white text-[32px] font-bold'>{title}</h3>
        <p className='text-white text-[20px]'>{desc}</p>
      </div>
    </div>
  );
}

export default Banner;
