import React, { useState } from 'react';

const ColorPickerApp = () => {

    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };
    return (
        <>

            <label htmlFor="colorPicker">Choose a color:</label>
            <input type="color" value={selectedColor} onChange={handleColorChange} />
            <p>Selected Color: {selectedColor}</p>
        </>
    )
}

export default ColorPickerApp
