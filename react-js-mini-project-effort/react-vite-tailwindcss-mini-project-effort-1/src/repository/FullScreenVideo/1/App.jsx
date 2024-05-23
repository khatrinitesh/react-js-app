import React, { useRef } from 'react';

const FullScreenApp = () => {
    return (
        <>
            <FullscreenVideo />
        </>
    )
}

export default FullScreenApp

const FullscreenVideo = () => {
    const videoRef = useRef(null);

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div>
            <video ref={videoRef} controls width="100%">
                <source
                    src="https://media.istockphoto.com/id/1575464237/video/awesome-confetti-and-flat-style-happy-birthday-video.mp4?s=mp4-640x640-is&k=20&c=-tSoVyL1hj9aL2qlJ-OWucjrpVCIg36Wuchm4NYWwK4="
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
        </div>
    );
};
