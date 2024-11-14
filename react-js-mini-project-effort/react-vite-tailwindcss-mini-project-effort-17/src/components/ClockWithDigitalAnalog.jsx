import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const ClockWithDigitalAnalogComp = () => {

  const [time,setTime] = useState({
    hours:0,
    minutes:0,
    seconds:0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours:now.getHours(),
        minutes:now.getMinutes(),
        seconds:now.getSeconds()
      })
    }, 1000);

    return () => setInterval(interval)
  },[])
  return (
    <>
      <AnalogClock time={time}/>
      <DigitalClock time={time}/>
    </>
  );
}

export default ClockWithDigitalAnalogComp;

const DigitalClock = ({ time }) => {

   // Convert hours to 12-hour format and determine AM/PM
   let hours = time.hours % 12;
   hours = hours ? hours : 12; // Adjust hour to display 12 instead of 0 for midnight
   const ampm = time.hours >= 12 ? "PM" : "AM";
 
   // Pad minutes and seconds with leading zeros
   const minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
   const seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;
  return (
    <div className="digital-clock">
      <h1>{`${hours}:${minutes}:${seconds} ${ampm}`}</h1>
    </div>
  );
};

const AnalogClock = ({ time }) => {
  // Calculate angles for clock hands based on current time
  const secondAngle = (time.seconds / 60) * 360;
  const minuteAngle = ((time.minutes + time.seconds / 60) / 60) * 360;
  const hourAngle = ((time.hours % 12 + time.minutes / 60) / 12) * 360;

  return (
    <div className="analog-clock">
      <div className="clock-face">
        <motion.div
          className="hour-hand"
          style={{ transform: `rotate(${hourAngle}deg)` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
        <motion.div
          className="minute-hand"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
        <motion.div
          className="second-hand"
          style={{ transform: `rotate(${secondAngle}deg)` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </div>
    </div>
  );
};
