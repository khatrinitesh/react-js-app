import React from 'react'

export default function Banner({bannertitle,bannerdesc}) {
  return (
    <div>
      <h3>{bannertitle}</h3>
      <p>{bannerdesc}</p>
    </div>
  )
}
