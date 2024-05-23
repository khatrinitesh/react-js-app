import React from 'react'

const FormatNumberApp = () => {
  return (
    <>
     <NumberFormatExample/> 
    </>
  )
}

export default FormatNumberApp

const NumberFormatExample = () => {

    const numberToFormat = 1234567.89;

    const formattedNumber = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:2,
        maximumFractionDigits:2,
    }).format(numberToFormat)
    return(
        <>
         <h1>Number Format Example</h1>
        <p>Original Number: {numberToFormat}</p>
        <p>Formatted Number: {formattedNumber}</p>
        </>
    )
}
