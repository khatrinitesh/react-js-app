import React from 'react'

const GetCurrentUrlApp = () => {
    return (
        <>
            <CurrentURLComp />
        </>
    )
}

export default GetCurrentUrlApp

const CurrentURLComp = () => {
    const currentURL = window.location.href;
    return (
        <>
            <p>Current URL: {currentURL}</p>
        </>
    )
}
