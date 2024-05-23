import React, { useState } from 'react';

const DetectCapsLockApp = () => {
    const [capsLockActivated, setCapsLockActivated] = useState(false);

    const handleKeyPress = (e) => {
        const isCapsLockOn = e.getModifierState('CapsLock');
        setCapsLockActivated(isCapsLockOn);
    };
    return (
        <>
            <input
                type="text"
                placeholder="Type something..."
                onKeyPress={handleKeyPress}
            />
            {capsLockActivated && (
                <p style={{ color: 'red' }}>Caps Lock is activated!</p>
            )}
        </>
    )
}

export default DetectCapsLockApp
