import React, { useState } from 'react';
import './style.css';
import SVGIcon from "../../../../../../assets/images/user-interface.svg";

const AnimateIconsApp = () => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className={`icon-container ${isHovered} ? 'hovered' : ''`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={SVGIcon} alt="" />
        </div>
    )
}

export default AnimateIconsApp
