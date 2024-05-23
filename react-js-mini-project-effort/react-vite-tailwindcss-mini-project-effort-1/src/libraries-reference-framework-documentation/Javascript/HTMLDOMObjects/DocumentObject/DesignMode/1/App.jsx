import React, { useRef } from 'react';

const CustomApp = () => {

    const editorRef = useRef(null);

    const enableDesignMode = () => {
        if (editorRef.current) {
            editorRef.current.contentEditable = true;
            document.designMode = 'off';
        }
    };



    return (
        <>
            <button onClick={enableDesignMode}>Enable design node</button>
            <div ref={editorRef} style={{ border: '1px solid black', minHeight: '100px' }}>
                {/* Your contenteditable area */}
            </div>
        </>
    )
}

export default CustomApp
