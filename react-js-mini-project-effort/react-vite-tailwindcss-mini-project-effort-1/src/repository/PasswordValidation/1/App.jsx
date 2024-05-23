import React, { useState } from 'react'

const PasswordValidationApp = () => {
    return (
        <>
            <PasswordValidation />
        </>
    )
}

export default PasswordValidationApp

const PasswordValidation = () => {
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const validatePassword = (value) => {
        // Define your password validation criteria here
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        const isValid =
            value.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecialChar;

        setIsValid(isValid);
    };

    return (
        <div>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            {!isValid && (
                <p style={{ color: 'red' }}>
                    Password must be at least 8 characters long and include at least one
                    uppercase letter, one lowercase letter, one number, and one special
                    character.
                </p>
            )}
        </div>
    );
};
