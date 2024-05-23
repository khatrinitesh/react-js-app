import React, { useRef, useEffect, useState } from 'react';

const FindHiddenElementApp = () => {


  return (
    <div>
      <HiddenElementExample/>
    </div>
  )
}

export default FindHiddenElementApp

const HiddenElementExample = () => {
    const hiddenElementRef = useRef();
    const [isElementHidden,setIsElement] = useState(false);

    useEffect(() => {
        const checkVisibility = () => {
            if(hiddenElementRef.current){
                const rect = hiddenElementRef.current.getBoundingClientRect();
                const isHidden = rect.width === 0 && rect.height === 0
                setIsElement(isHidden)
            }
        }
        checkVisibility();
        window.addEventListener('resize',checkVisibility)

         // Cleanup event listener on component unmount
         return () => {
            window.removeEventListener('resize',checkVisibility)
         }
    },[])
    return(
        <>
        <h1>Hidden Element Finder</h1>
      <div ref={hiddenElementRef} style={{ display: 'none' }}>
        {/* Your hidden content goes here */}
        <p>This is a hidden element.</p>
      </div>
      <p>{isElementHidden ? 'Element is hidden' : 'Element is visible'}</p>
        </>
    )
}
