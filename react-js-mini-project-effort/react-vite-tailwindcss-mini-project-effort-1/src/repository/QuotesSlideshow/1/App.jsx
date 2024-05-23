import React, { useState } from 'react';


const QuotesSlideshowApp = () => {
  return (
    <>
      <QuotesSlideshow/>
    </>
  )
}

export default QuotesSlideshowApp

const QuotesSlideshow = () => {
    const [currentQuoteIndex,setCurrenQuoteIndex] = useState(0);

    const quotesData = [
        {text:'lorem 1',author:'nitesh'},
        {text:'lorem 2',author:'sameet'},
        {text:'lorem 3',author:'urvashi'},
        {text:'lorem 4',author:'arvind'}
    ]

    const nextQuote = () => {
        setCurrenQuoteIndex((prevIndex) =>
          prevIndex === quotesData.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevQuote = () => {
        setCurrenQuoteIndex((prevIndex) =>
          prevIndex === 0 ? quotesData.length - 1 : prevIndex - 1
        );
      };
    return(
        <>
         <h2>{quotesData[currentQuoteIndex].text}</h2>
         <p>- {quotesData[currentQuoteIndex].author}</p>
         <button onClick={prevQuote}>Previous quote</button>
         <button onClick={nextQuote}>Previous quote</button>
        </>
    )
}