import React, { useState } from 'react';

const CustomApp = () => {
    return (
        <>
            <ComplexComponent />
        </>
    )
}

export default CustomApp

const ComplexComponent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [isEditing, setIsEditing] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(Number(e.target.value))
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSaveClick = () => {
        setIsEditing(true)
    }

    const handleEditClick = () => {
        setIsEditing(false)
    }


    return (
        <>
            <h1>User Profile</h1>
            {isEditing ? (
                <>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                    <br />
                    <label>Age:</label>
                    <input type="text" value={age} onChange={handleAgeChange} />
                    <br />
                    <label>Name:</label>
                    <input type="text" value={email} onChange={handleEmailChange} />
                    <br />

                    <button onClick={handleSaveClick}>Save</button>
                </>
            ) : (<>
                <p>Name: {name}</p>
                <p>Name: {age}</p>
                <p>Name: {email}</p>
                <button onClick={handleEditClick}>Edit</button>
            </>)}
        </>
    )
}
