import React from 'react'

const BtnPrimary = ({label,onClick}) => {
  return (
    <>
    <button style={{backgroundColor:'red',color:'white'}} onClick={onClick}>{label}</button></>
  )
}

export default BtnPrimary