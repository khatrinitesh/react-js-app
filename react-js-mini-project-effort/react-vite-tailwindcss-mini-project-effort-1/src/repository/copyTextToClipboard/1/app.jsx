import React, { useState } from 'react'

const CopyTextClipboardApp = () => {
    return (
        <>
            <CopyToClipboardButton />
        </>
    )
}

export default CopyTextClipboardApp

const CopyToClipboardButton = () => {
    const [textToCopy, setTextToCopy] = useState('Text to copy');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset the "Copied" status after 2 seconds
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }
    };

    return (
        <div>
            <input type="text" value={textToCopy} readOnly />
            <button onClick={handleCopyToClipboard}>
                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
        </div>
    );
};
