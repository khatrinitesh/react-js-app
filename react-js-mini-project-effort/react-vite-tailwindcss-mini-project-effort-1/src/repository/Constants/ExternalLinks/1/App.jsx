import React from 'react';
import { externalLinks } from './data';

const ExternalLinksApp = () => {
    return (
        <div>
            <a target="_blank" href={externalLinks.contactUs}>Contact us</a>
            <a target="_blank" href={externalLinks.shopeeURL}>Shope</a>
            <a target="_blank" href={externalLinks.lazadaURL}>Lazada</a>
        </div>
    )
}

export default ExternalLinksApp
