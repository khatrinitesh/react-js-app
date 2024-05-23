import React from 'react'

export default function Banner(val) {
    const {title,desc} = val;
  return (
    <div className='banner_content'>
        <h3 className='bannerTitle'>{title}</h3>
        <p className='bannerDesc'>{desc}</p>
    </div>
  )
}
