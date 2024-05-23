import React from 'react'

export default function Banner(props) {
    const {title,desc} = props
  return (
    <div className='bannerContent'>
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
    </div>
  )
}
