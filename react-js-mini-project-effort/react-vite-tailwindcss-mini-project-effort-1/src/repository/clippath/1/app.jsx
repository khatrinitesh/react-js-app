import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./custom.css";

export default function CustomApp() {
  return (
    <>
      <BlurOverlay blurRadius={10} />
    </>
  );
}

const BlurOverlay = ({ blurRadius }) => {
  const webcamRef = useRef(null);
  const [webcamEnabled, setWebcamEnabled] = useState(true);

  useEffect(() => {
    if (webcamRef.current) {
      const canvas = webcamRef.current.canvas;
      const context = canvas.getContext("2d");
      context.filter = `blur(${blurRadius}px)`;
    }
  }, [blurRadius]);

  const handleWebcamError = (error) => {
    console.error("Webcam error:", error);
    setWebcamEnabled(false);
  };

  return (
    <div className="blur-overlay">
      {webcamEnabled ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          onUserMediaError={handleWebcamError}
          className="webcam-avatar"
        />
      ) : null}
    </div>
  );
};
