import React from 'react'

const Banner = ({title,desc}) => {
  return (
    <div className='bannerContent py-10 bg-yellow-200'>
      <div className="container mx-auto">
        <h3 className='font-bold text-[32px]'>{title}</h3>
        <p className='font-normal text-[18px]'>{desc}</p>
        </div>
    </div>
  )
}

export default Banner