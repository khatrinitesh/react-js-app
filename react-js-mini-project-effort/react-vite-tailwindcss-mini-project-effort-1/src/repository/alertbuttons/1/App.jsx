import React from 'react'

const AlertBtnsApp = () => {
  return (
    <>
      <AlertButtons/>
    </>
  )
}

export default AlertBtnsApp

const AlertButtons = () => {

    const showAlert = (message) => {
        window.alert(message)
    }
    return(
        <>
        <button onClick={() => showAlert('hello!')}>Show alert with hello</button>
        <button onClick={() => showAlert('React is awesome')}>Show alert with react is awesome</button>
        </>
    )
}
