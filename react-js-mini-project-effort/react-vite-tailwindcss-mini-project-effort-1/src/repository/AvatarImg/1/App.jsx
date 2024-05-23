import React from 'react'

const AvatarImgApp = () => {
    return (
        <>
            <Avatar name="nitesh khatri" email="nitesh.khatri88@gmail.com" size={500} />
        </>
    )
}

export default AvatarImgApp

const Avatar = ({ name, email, size }) => {
    const gravatarUrl = 'https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg'

    return (
        <>
            <h2>{name}</h2>
            <img
                src={gravatarUrl}
                alt={`${name}'s Avatar`}
                style={{
                    borderRadius: '50%',
                    width: `${size}px`,
                    height: `${size}px`,
                }}

            />
        </>
    )
}
