import React from 'react'

const RemoveDecimalsApp = () => {
  return (
    <div>
      <RemoveDecimals/>
    </div>
  )
}

export default RemoveDecimalsApp

const RemoveDecimals = () => {
    const numberWithDecimals = 123.457
    const numberWithoutDecimals = numberWithDecimals.toFixed(0);

    return(
        <>
        <p>Number with decimals: {numberWithDecimals}</p>
        <p>Number without decimals: {numberWithoutDecimals}</p>
        
        </>
    )
}
