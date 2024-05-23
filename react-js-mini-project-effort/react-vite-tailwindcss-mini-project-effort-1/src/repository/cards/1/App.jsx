import React from 'react';
import { Users } from './Constants';


const CardsApp = () => {
    return (
        <>
            <div className='flex gap-[15px] flex-wrap'>
                {Users.map((val, index) => {
                    const { name, rollNo } = val;
                    return (
                        <Info key={index} name={name} rollNo={rollNo} />
                    )
                })}
            </div>
        </>
    )
}

export default CardsApp

function Info({ name, rollNo }) {
    return (
        <>
            <div className='border-[1px] border-solid border-[red] w-[50%] md:w-[calc(100%/6)]'>
                <p className='break-all'> {name} </p>
                <p> {rollNo}</p>
            </div>
        </>
    )
}
