import React from 'react'

const CustomApp = () => {

    const renderList = () => {
        // Data to be rendered
        const data = ["Item 1", "Item 2", "Item 3"];

        // Use React.Fragment to avoid adding unnecessary DOM elements
        return (
            <>
                {data.map((val, index) => {
                    return (
                        <div key={index}>{val}</div>
                    )
                })}
            </>
        )
    }
    return (
        <>
            {renderList()}
        </>
    )
}

export default CustomApp
