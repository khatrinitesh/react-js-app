import React, { useEffect } from 'react'

const CustomApp = () => {

    // Define a function to handle the click event
    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked!', e)
    }

    useEffect(() => {
        // create a text node
        const textNode = document.createTextNode('hello this is a text node')

        // get a reference to a dom element
        const targetElement = document.getElementById('targetElement')

        // append the text node to the element
        if (targetElement) {
            targetElement.appendChild(textNode)
        }

        // cleanup function (optional)
        return () => {
            // remove the text node on component unmount 
            if (targetElement) {
                targetElement.removeChild(textNode)
            }
        }
    }, [])
    return (
        <>
            <div id="targetElement">Target Element</div>;
        </>
    )
}

export default CustomApp
