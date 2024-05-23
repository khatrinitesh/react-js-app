import React from 'react';

const BrowserWindowApp = () => {
  return (
    <div>
      <OpenNewWindow/>
    </div>
  )
}

export default BrowserWindowApp

const OpenNewWindow = () => {

    const openNewWindow = () => {
        const newWindow = window.open("https://www.facebook.com/","_blank","width=200,height=200")
        if(newWindow){
            newWindow.focus()
        }
    }
    

    return(
        <>
        <h1>open a new window</h1>
        <button onClick={openNewWindow}>Open new window</button>
        </>
    )
}
