import React, { useState } from 'react';

const TogglePwdVisibilityApp = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleToggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <label>
                Password:
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <button type="button" onClick={handleToggleVisibility}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
        </>
    )
}

export default TogglePwdVisibilityApp
