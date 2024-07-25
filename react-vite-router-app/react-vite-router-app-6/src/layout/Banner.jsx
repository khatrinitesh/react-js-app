import React from 'react'

const BannerContent = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} py-10 bg-slate-300 bannerDesign`}>
      <div className="container mx-auto">
      <h3 className='title'>{title}</h3>
      <p className='desc'>{desc}</p>
      </div>
    </div>
  )
}

export default BannerContent
