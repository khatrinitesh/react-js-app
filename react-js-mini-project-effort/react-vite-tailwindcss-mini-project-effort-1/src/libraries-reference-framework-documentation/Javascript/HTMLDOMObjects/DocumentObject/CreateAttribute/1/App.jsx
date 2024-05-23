import React, { useRef, useEffect } from 'react';

const CustomApp = () => {

    const myElementRef = useRef(null);

    useEffect(() => {
        // Access the DOM element using the ref
        const myElement = myElementRef.current;

        if (myElement) {
            myElement.setAttribute('data-custom-attribute', 'custom-value')
        }
    }, [])
    return (
        <div ref={myElementRef}>
            hello world!
        </div>
    )
}

export default CustomApp
