import React from 'react'

export default function Banner({title,desc}) {
  return (
    <div className='bannerContent'>
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
    </div>
  )
}
