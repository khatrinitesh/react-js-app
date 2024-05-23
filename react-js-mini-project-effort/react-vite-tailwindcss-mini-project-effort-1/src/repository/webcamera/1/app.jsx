import React, { useRef, useEffect } from "react";
import "./custom.css";

export default function CustomApp() {
  return (
    <>
      <div className="blur-overlay">
        <div className="clear-area">
          <WebcamFeed />
        </div>
      </div>
    </>
  );
}
const WebcamFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline muted />;
};
