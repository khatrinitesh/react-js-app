import React from 'react'

const CustomApp = () => {
    const styles = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    return (
        <div style={styles}>
            <h1>Hello from MyComponent</h1>
            <p>This component has inline styles applied.</p>
        </div>
    )
}

export default CustomApp

