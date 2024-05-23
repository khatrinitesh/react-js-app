
import React, { useState } from 'react';
import './style.css';

const ReadMoreLessBtnApp = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
    <hr/>
      <ReadMoreButton text={loremIpsum} maxChar={100}/>
    </>
  )
}

export default ReadMoreLessBtnApp

const ReadMoreButton = ({text,maxChar}) => {
    const [showFullText,setShowFullText] = useState(false);

    const truncateText = showFullText ? text : text.slice(0,maxChar)

    const toggleReadMore= () => {
        setShowFullText(!showFullText)
    }
    return(
        <>
         <p>{truncateText}</p>
         {text.length > maxChar && (
            <button className='btnReadMore' onClick={toggleReadMore}>
                {showFullText ? 'Read less' : 'Read more'}
            </button>
         )}
        </>
    )
}


