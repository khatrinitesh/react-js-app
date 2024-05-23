import React, { useState } from 'react';
const CustomApp = () => {

    return (
        <>
            <SelectOption />
        </>
    )

}

export default CustomApp;

const SelectOption = () => {

    const options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ]

    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectOption = () => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            <div className="custom-select">
                <div className="select-header" onClick={toggleDropdown}>
                    <div className="selected-option">{selectedOption || 'Select an option'}</div>
                    <div className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>▼</div>
                </div>

                {isDropdownOpen && (
                    <div className="options">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="option"
                                onClick={() => handleSelectOption(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
