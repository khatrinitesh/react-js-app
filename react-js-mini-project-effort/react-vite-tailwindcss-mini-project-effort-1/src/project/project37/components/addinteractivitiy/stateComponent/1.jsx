import React, { useState } from 'react';
import { sculptureList } from '../../constants';

export default function StateResponding() {
  return (
    <>
        <Gallery/>
    </>
  )
}

function Gallery(){
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false);
    const hasNext  = index < sculptureList.length - 1


    let sculpture = sculptureList[index];

    const handleNextClick = () => {
        if(hasNext){
            setIndex(index + 1)
        }
        else{
            setIndex(0)
        }
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }

    return(
        <>
        <button onClick={handleNextClick}>Next</button>
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <button onClick={handleMoreClick}>show details</button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt}/>
        </>
    )
}

