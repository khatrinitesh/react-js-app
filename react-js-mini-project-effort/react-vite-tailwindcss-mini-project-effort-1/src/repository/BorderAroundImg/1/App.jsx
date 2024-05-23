import React from 'react'

const BorderAroundImgApp = () => {
    return (
        <>
            <ImgWithBorder src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="asdad" borderSize={2} borderColor="red" />
        </>
    )
}

export default BorderAroundImgApp


const ImgWithBorder = ({ src, alt, borderSize, borderColor }) => {
    return (
        <>
            <img src={src} alt={alt} style={{ border: `${borderSize}px solid ${borderColor}`, borderRadius: '8px' }} />
        </>
    )
}