import React from 'react'

const BtnPrimary = ({onClick,label}) => {
  return (
    <>
      <button onClick={onClick} className='bg-black text-white rounded px-5 py-2'>{label}</button>
    </>
  )
}

export default BtnPrimary
