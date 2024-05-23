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
            <MyComponent name="nitesh" age={34} />
            asda
        </div>
    )
}

export default CustomApp

const MyComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>Your age is: {props.age}</p>
        </div>
    );
};

