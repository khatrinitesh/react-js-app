import React from 'react'

const CustomApp = () => {
    const example = [
        { id: 1, name: 'nitesh' },
        { id: 2, name: 'sameet' },
        { id: 3, name: 'arvind' },
        { id: 4, name: 'vishal' },
    ]
    return (
        <>
            {example.length > 0 ? (<>the array is not empty</>) : (<>the array is empty</>)}
        </>
    )
}

export default CustomApp
