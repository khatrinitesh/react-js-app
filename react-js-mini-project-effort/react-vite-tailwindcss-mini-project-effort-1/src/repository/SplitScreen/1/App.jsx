import React from 'react'

const SplitScreenApp = () => {
    return (
        <div className='flex'>
            <SplitScreen
                leftContent={<div>Left Content</div>}
                rightContent={<div>Right Content</div>}
            />
        </div>
    )
}

export default SplitScreenApp

const SplitScreen = ({ leftContent, rightContent }) => {
    return (
        <div className="split-screen-container flex w-full">
            <div className="split-screen-half w-[50%] bg-[#28260f] text-[white]">{leftContent}</div>
            <div className="split-screen-half w-[50%]">{rightContent}</div>
        </div>
    );
};
