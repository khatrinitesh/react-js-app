import React from 'react'

export default function Banner({title,desc}) {
  return (
    <div className='bannerContent'>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
