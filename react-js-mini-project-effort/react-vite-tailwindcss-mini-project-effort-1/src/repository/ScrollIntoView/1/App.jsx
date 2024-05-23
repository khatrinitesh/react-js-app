import React, { useRef } from 'react'

const ScrollIntoViewApp = () => {
    const targetRef = useRef()


    const handleScrollIntoView = () => {
        targetRef.current.scrolIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <>
            <button onClick={handleScrollIntoView}>Scroll Into View</button>
            <div style={{ height: '300px', overflowY: 'scroll' }}>
                {/* Content above */}
                <div style={{ height: '500px', backgroundColor: 'lightgray' }} ref={targetRef}>
                    {/* Target element */}
                    Scroll to me!
                </div>
                {/* Content below */}
            </div>
        </>
    )
}

export default ScrollIntoViewApp
