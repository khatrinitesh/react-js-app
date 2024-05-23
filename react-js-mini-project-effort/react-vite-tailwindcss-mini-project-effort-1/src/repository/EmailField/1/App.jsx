import React, { useState } from 'react'

const EmailFieldApp = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    return (
        <>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <p>Your entered email: {email}</p>
            </div>
        </>
    )
}

export default EmailFieldApp
