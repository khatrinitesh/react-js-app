import React from 'react'

const StyleHRApp = () => {
    return (
        <>
            <ColoredLine />
        </>
    )
}

export default StyleHRApp

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
