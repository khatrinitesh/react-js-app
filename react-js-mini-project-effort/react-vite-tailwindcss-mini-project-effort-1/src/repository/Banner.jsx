import React from 'react'

const Banner = ({title,desc}) => {
  return (
    <div className='bannerContent'> 
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Banner
