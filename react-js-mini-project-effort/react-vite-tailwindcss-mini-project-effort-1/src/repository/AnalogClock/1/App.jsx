import React, { useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <Clock />
    </>
  );
};

export default CustomApp;

const Clock = () => {
  useEffect(() => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    const updateClock = () => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    };

    // Initial update
    updateClock();

    // Update every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr" />
        </div>
        <div className="min">
          <div className="mn" id="mn" />
        </div>
        <div className="sec">
          <div className="sc" id="sc" />
        </div>
      </div>
    </>
  );
};
