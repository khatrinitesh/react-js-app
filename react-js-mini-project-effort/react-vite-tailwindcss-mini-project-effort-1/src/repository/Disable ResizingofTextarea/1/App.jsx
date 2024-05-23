import React from 'react'

const DisableResizingTextAreaApp = () => {
  return (
    <>
      <textarea
      style={{ resize: 'none' }}
      rows="4"
      cols="50"
      placeholder="Enter your text here..."
    />
    </>
  )
}

export default DisableResizingTextAreaApp
