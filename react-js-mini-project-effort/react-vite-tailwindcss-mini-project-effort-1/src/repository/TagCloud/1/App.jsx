import React from 'react';
import './style.css';

const TagCloudApp = () => {
    return (
        <>
            <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
                <li><a href="#" data-weight="4">HTTP</a></li>
                <li><a href="#" data-weight="1">Ember</a></li>
                <li><a href="#" data-weight="5">Sass</a></li>
                <li><a href="#" data-weight="8">HTML</a></li>
                <li><a href="#" data-weight="6">FlexBox</a></li>
                <li><a href="#" data-weight="4">API</a></li>
                <li><a href="#" data-weight="5">VueJS</a></li>
                <li><a href="#" data-weight="6">Grid</a></li>
                <li><a href="#" data-weight="2">Rest</a></li>
                <li><a href="#" data-weight="9">JavaScript</a></li>
                <li><a href="#" data-weight="3">Animation</a></li>
                <li><a href="#" data-weight="7">React</a></li>
                <li><a href="#" data-weight="8">CSS</a></li>
                <li><a href="#" data-weight="1">Cache</a></li>
                <li><a href="#" data-weight="3">Less</a></li>
            </ul>
        </>
    )
}

export default TagCloudApp
