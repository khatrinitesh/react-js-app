import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>&copy; copyright {currentYear}</p>
    </footer>
  )
}

export default Footer
