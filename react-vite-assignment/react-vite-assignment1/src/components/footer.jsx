import React from 'react'

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentFullYear}</p>
    </footer>
  )
}

export default Footer
