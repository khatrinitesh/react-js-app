import React from 'react'

const Banner = ({title,desc,bannerStyle,titleStyle,descStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent w-full py-[50px] bg-green-200`}>
        <h3 className={`${titleStyle}`}>{title}</h3>
        <p className={`${descStyle}`}>{desc}</p>
    </div>
  )
}

export default Banner
