import React from 'react'
import { portfolioData } from '../constants/constants'

const PortfolioData = () => {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
      {portfolioData.map((item) => (
        <a
          key={item.id}
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src={item.imageUrl}
            className="w-full shadow"
            alt={item.alt}
          />
        </a>
      ))}
    </div>
  )
}

export default PortfolioData