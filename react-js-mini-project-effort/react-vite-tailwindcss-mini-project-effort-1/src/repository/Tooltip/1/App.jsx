import React, { useState } from 'react';
import './style.css';

const TooltipApp = () => {
    return (
        <>
            <Tooltip text="This is a tooltip">
                <button>Hover me</button>
            </Tooltip>
            <h1 className='md:text-headTitleDT text-headTitleMOB'>Head Title</h1>
        </>
    )
}

export default TooltipApp

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && <div className="tooltip">{text}</div>}
        </div>
    );
};
