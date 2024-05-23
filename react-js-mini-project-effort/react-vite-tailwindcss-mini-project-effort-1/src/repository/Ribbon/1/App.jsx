import React from 'react';
import './style.css';

const RibbonApp = () => {
    return (
        <>
            <div className="corner-ribbon top-left sticky red shadow">Hello</div>
            <div className="corner-ribbon top-right sticky blue">Hello</div>
            <div className="corner-ribbon bottom-left sticky orange">Hello</div>
            <div className="corner-ribbon bottom-right sticky green shadow">Hello</div>

        </>
    )
}

export default RibbonApp
