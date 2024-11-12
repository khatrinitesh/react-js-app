import React from "react";
import { calloutData } from "../constants/calloutData";

const CalloutComp = () => {
  return (
    <>
      <h1>Neumorphism Callout Example</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {calloutData.map((callout, index) => (
          <Callout
            key={index}
            title={callout.title}
            message={callout.message}
            type={callout.type.toLowerCase()} // Ensure the type is lowercase
          />
        ))}
      </div>
    </>
  );
};

export default CalloutComp;

const Callout = ({ title, message, type }) => {
  const iconMap = {
    info: "ℹ️", // Info icon
    warning: "⚠️", // Warning icon
    success: "✅", // Success icon
  };
  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-header">
        <span className="callout-icon">{iconMap[type]}</span>
        <h3>{title}</h3>
      </div>
      <p>{message}</p>
    </div>
  );
};
