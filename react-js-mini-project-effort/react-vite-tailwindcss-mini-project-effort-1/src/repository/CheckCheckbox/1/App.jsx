import React, { useState } from 'react';

export default function CheckCheckboxApp() {
    return (
        <>
            <CheckboxExample />
        </>
    )
}


const CheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Check me
            </label>

            <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}.</p>
        </>
    )
}

