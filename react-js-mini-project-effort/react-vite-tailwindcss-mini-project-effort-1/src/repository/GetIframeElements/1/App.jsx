import React, { useRef } from 'react';

const GetIframeElementApp = () => {
    return (
        <>
            <IframeComponent />
        </>
    )
}

export default GetIframeElementApp

const IframeComponent = () => {
    const iframeRef = useRef(null);

    const handleButtonClick = () => {
        // Access the contentWindow of the iframe
        const iframeContentWindow = iframeRef.current.contentWindow;

        // Access the document inside the iframe
        const iframeDocument = iframeContentWindow.document;

        // Do something with the iframe content
        // For example, change the background color of the body
        iframeDocument.body.style.backgroundColor = 'lightblue';
    };

    return (
        <div>
            <iframe ref={iframeRef} title="example" src="https://example.com" width="400" height="300" />
            <br />
            <button onClick={handleButtonClick}>Change Iframe Content</button>
        </div>
    );
};
