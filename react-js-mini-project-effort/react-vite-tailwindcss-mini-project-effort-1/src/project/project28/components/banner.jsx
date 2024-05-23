import React from 'react'

export default function Banner(val) {
    const {title,desc} = val;
  return (
    <div className='bannerContent'>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
