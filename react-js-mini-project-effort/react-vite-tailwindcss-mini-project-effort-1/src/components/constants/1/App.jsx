import React from 'react';
import { Link } from 'react-router-dom';
import { socialIcons } from './data';

const CustomApp = () => {
    return (
        <div>
            {socialIcons.map((icon, index) => {
                return (
                    <Link href={icon.url} key={index}>
                        <img src={icon.icon} alt={icon.name} />
                    </Link>
                )
            })}
        </div>
    )
}

export default CustomApp
