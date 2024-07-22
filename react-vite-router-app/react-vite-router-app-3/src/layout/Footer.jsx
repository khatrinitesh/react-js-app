import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='p-2 bg-black text-white'>
      <div className="container mx-auto">
        <p>&copy;  Copyright {currentYear}</p>
        </div>
    </footer>
  )
}

export default Footer