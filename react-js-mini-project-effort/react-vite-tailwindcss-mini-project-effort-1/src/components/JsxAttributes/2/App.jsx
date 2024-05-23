import React from 'react'

const CustomExample = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    const user = {
        name: 'Bob',
        avatarUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        role: 'Developer',
    };

    const style = {
        color: 'blue',
        fontSize: '18px',
    };
    return (
        <>
            {/* STRING INTERPOLATION IN CLASSNAME */}
            <p className={`user-role ${user.role.toLowerCase()}`}>
                User: {user.name}
            </p >

            {/* CONDITIONAL RENDERING BASED ON THE PRESENCE OF AVATARURL */}
            {user.avatarUrl && <img src={user.avatarUrl} alt="User Avatar" />}

            {/* Inline styles using the style attribute */}
            <p style={style}>Nisi aute commodo occaecat magna magna. Consequat est pariatur velit proident elit do incididunt duis ad. Dolor eiusmod eiusmod nostrud eu anim aliqua ea. Ut dolore anim pariatur minim commodo id occaecat sunt excepteur officia irure nostrud velit elit. Non deserunt dolor esse exercitation veniam Lorem magna cillum sunt. Excepteur aliqua adipisicing deserunt officia nostrud laborum dolor Lorem nulla. Sint aliquip consequat nostrud ipsum eu.

                Nulla veniam voluptate ullamco mollit sit laborum enim cillum nulla labore eiusmod. Nulla aliqua enim qui dolore aute irure enim sunt cillum ipsum eu esse exercitation. Occaecat minim est cillum ullamco et pariatur pariatur pariatur ad exercitation deserunt culpa ipsum ut.</p>

            {/* Event handling with onClick attribute */}
            <button onClick={handleClick}>Click me</button>

            {/* Setting attributes based on conditions */}
            <input type="text" placeholder={user.name ? `Enter your ${user.name}'s email` : `Enter email`} disabled={!user.name} />

            {/* Using spread operator to pass props dynamically */}
            <ComponentWithDynamicProps {...user} customProp="Custom Value" customProp112="Custom Value2" />
        </>
    )
}

export default CustomExample

const ComponentWithDynamicProps = (props) => {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Custom Prop: {props.customProp}</p>
            <p>Custom Prop2: {props.customProp112}</p>
        </>
    )
}
