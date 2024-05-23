import React, { useState } from 'react';

const SectionCounterApp = () => {
    const [currentSection, setCurrentSection] = useState(1);

    const increaseSection = () => {
        setCurrentSection(currentSection + 1);
    }

    const decreaseSection = () => {
        if(currentSection > 1){
            setCurrentSection(currentSection - 1)
        }
      };
    return (
        <>
            <h2 className='font-bold'>Section {currentSection}</h2>
            <button className='bg-[orange] py-[5px] px-[10px]' onClick={decreaseSection}>Previous Section</button>
            <button className='bg-[red] text-[#fff] py-[5px] px-[10px]' onClick={increaseSection}>Next Section</button>
        </>
    )
}

export default SectionCounterApp
