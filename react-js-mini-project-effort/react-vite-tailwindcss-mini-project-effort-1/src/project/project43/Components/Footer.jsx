import React, { useEffect, useRef } from 'react';

const Footer = () => {
    const footerRef = useRef(null);
    useEffect(() => {
        if (footerRef.current) {
            const footerInnerHeight = footerRef.current.clientHeight;
            console.log('Footer Inner Height:', footerInnerHeight);
        }
    }, []);
    return (
        <footer ref={footerRef}>
            <p>&copy; Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
