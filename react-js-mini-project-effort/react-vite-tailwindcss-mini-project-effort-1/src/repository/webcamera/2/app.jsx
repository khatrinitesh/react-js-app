import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

const CustomApp = () => {
  return (
    <>
      <WebcamOverlay />
    </>
  );
};

export default CustomApp;

const WebcamOverlay = () => {
  const webcamRef = useRef(null);
  const [webcamEnabled, setWebcamEnabled] = useState(true);

  useEffect(() => {
    const handleWebcamError = (error) => {
      console.error("Webcam error:", error);
      setWebcamEnabled(false);
    };

    if (webcamRef.current) {
      webcamRef.current.video.srcObject.getTracks().forEach((track) => {
        track.addEventListener("ended", handleWebcamError);
      });
    }
  }, []);

  return (
    <div className="webcam-container">
      {webcamEnabled && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      )}
    </div>
  );
};
