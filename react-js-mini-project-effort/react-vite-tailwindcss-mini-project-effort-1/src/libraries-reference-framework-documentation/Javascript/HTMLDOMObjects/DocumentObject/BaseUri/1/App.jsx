import React, { useEffect } from 'react';

const CustomApp = () => {

    useEffect(() => {
        // get the base url
        const baseurl = window.location.origin;
        console.log(baseurl)
    }, [])
    return (
        <div>
        </div>
    )
}

export default CustomApp
