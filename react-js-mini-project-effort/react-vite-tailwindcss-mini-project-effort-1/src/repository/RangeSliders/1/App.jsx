import React, { useState } from 'react';

const RangeSliderApp = () => {
    return (
        <>
            <RangeSlider />
        </>
    )
}

export default RangeSliderApp


const RangeSlider = () => {

    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };



    return (
        <>
            <label htmlFor="rangeSlider">Range Slider</label>
            <input
                type="range"
                id="rangeSlider"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <p>Value: {sliderValue}</p>
        </>
    );
};