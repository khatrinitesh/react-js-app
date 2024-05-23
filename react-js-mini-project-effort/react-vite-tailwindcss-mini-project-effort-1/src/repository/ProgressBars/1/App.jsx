import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';
import './style.css';

const ProgressBarsApp = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <ProgressBar value={progress} />
        </>
    )
}

export default ProgressBarsApp


const ProgressBar = ({ value }) => {
    const { width } = useSpring({
        width: `${value}%`,
        from: { width: '0%' },
    });

    return (
        <div className="progress-bar-container">
            <animated.div className="progress-bar" style={{ width }} />
        </div>
    );
};