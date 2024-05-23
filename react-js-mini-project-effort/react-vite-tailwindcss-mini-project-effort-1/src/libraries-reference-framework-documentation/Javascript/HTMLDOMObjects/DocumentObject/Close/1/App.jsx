import React, { useState } from 'react';

const CustomApp = () => {
    const [isVisible, setIsVisible] = useState(true);

    const btnClose = () => {
        setIsVisible(false)
    }
    return (
        <div>
            {isVisible && <div>lorem ipsum</div>}
            <button onClick={btnClose}>&times;</button>
        </div>
    )
}

export default CustomApp
