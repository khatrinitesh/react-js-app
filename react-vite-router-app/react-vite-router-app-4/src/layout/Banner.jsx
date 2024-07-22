import React from 'react'

const Banner = ({title,desc}) => {
  return (
    <div className='bannerContent'>
        <h3 className='font-bold text-[32px]'>{title}</h3>
        <p className='font-medium text-[16px]'>{desc}</p>
    </div>
  )
}

export default Banner