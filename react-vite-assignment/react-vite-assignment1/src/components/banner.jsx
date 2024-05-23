import React from 'react'

const Banner = ({bannerStyle,title,desc}) => {
  return (
    <div className={`${bannerStyle}`}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Banner
