import React from 'react'
import { clientLogos } from '../constants/constants'

const ClientsData = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
    {clientLogos.map((logo, index) => (
      <span key={index} className="m-8 block">
        <img
          src={logo}
          alt="client logo"
          className="mx-auto block h-12 w-auto"
        />
      </span>
    ))}
  </div>
  )
}

export default ClientsData