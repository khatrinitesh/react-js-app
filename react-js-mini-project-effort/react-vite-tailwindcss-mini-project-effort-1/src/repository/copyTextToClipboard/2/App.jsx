import React, { useState } from 'react';

const CustomApp = () => {
    const [textToCopy, setTextToCopy] = useState('Hello, Copy Me!');
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
        // create a temporary input element
        const tempInput = document.createElement('input');

        tempInput.value = textToCopy;

        // append the input element to the dom
        document.body.appendChild(tempInput);

        // select the text in the input element
        tempInput.select()

        // execute the copy command 
        document.execCommand('copy');

        // remove the temporary input element from the DOM
        document.body.removeChild(tempInput);

        setIsCopied(true);
    }
    return (
        <>
            <input type="text" value={textToCopy} readOnly />
            <button onClick={handleClick}>{isCopied ? 'copied!' : 'copy to clipboard'}</button>
        </>
    )
}

export default CustomApp
