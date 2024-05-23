import React from 'react';


export default function Banner({title,desc}) {
  return (
    <div className='bannerContent'>
      <div className='container'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
