import React, { useState, useEffect } from 'react'

const HooksApp = () => {
    const [state, setState] = useState({
        loading: true,
    });

    useEffect(() => {
        setTimeout(() => {
            setState({
                loading: false
            })
        }, 1000)
    }, [])

    const { loading } = state;
    return (
        <>
            {loading ? (<h2>Component is loading...</h2>) : (<h2>Hello welcome</h2>)}
        </>
    )
}

export default HooksApp
