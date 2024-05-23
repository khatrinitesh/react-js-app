import React, { useState } from 'react';

const CustomApp = () => {

    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const handleKeyDown = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        }
        else {
            setIsCapsLockOn(false);
        }
    }
    return (
        <>
            <input type="text" onKeyDown={handleKeyDown} placeholder='Type something' />
            {isCapsLockOn && <p>Caps lock is on</p>}
        </>
    )
}

export default CustomApp
