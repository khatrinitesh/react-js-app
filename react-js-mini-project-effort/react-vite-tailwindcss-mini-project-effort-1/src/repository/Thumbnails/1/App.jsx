import React from 'react'

const ThumbnailsApp = () => {
    return (
        <>
            <ThumbnailImg src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="Title" width={100} height={100} />

            <ThumbnailImg src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="Title" width={100} height={100} />
        </>
    )
}

export default ThumbnailsApp

const ThumbnailImg = ({ src, alt, width, height }) => {
    return (
        <>
            <img src={src} alt={alt} style={{ width: `${width}`, height: `${height}`, objectFit: 'cover', borderRadius: '8px' }} />
        </>
    )
}
