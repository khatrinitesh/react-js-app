import React, { useState } from 'react'

const CustomApp = () => {

    const options = [
        { id: 1, name: 'nitesh' },
        { id: 2, name: 'sameet' },
        { id: 3, name: 'arvind' },
    ]
    return (
        <>
            <CustomSelect options={options} />
        </>
    )
}

export default CustomApp


const CustomSelect = ({ options }) => {
    return (
        <>
            <select>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    )
}