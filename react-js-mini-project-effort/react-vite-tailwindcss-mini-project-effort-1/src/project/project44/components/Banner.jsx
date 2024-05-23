import React from 'react'

const Banner = ({ title, desc, style }) => {
    return (
        <div className={`bannerContent bg-blue-300 p-[20px] text-center w-full ${style}`}>
            <h2 className='bannerTitle text-[50px] font-medium'>{title}</h2>
            <p className='bannerDesc text-[20px]'>{desc}</p>
        </div>
    )
}

export default Banner
