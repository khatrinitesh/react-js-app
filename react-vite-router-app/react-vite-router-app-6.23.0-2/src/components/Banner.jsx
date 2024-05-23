import React from 'react'

const Banner = ({title,desc,styleBanner}) => {
  return (
    <>
    <div className={`${styleBanner} bannerContent`}>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
    </>
  )
}

export default Banner