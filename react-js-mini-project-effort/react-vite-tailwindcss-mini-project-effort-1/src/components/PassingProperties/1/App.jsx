import React from 'react'

const CustomApp = () => {
    return (
        <>
            <MyComponent name="nitesh" desc={34} />
            <MyComponent name="sameet" desc={41} />
        </>
    )
}

export default CustomApp

const MyComponent = (props) => {
    const { name, desc } = props
    return (
        <>
            <h2>{name}</h2>
            <p>{desc}</p>
        </>
    )
}


