import React from 'react'

const GetCurrentDateApp = () => {

    const currentDate = new Date();
    const resultDate = currentDate.toDateString();
    const month = currentDate.getMonth()
    const day = currentDate.getDay()
    const year = currentDate.getYear()
    return (
        <>
            {resultDate} <br /> {month} - {day} - {year}
        </>
    )
}

export default GetCurrentDateApp
