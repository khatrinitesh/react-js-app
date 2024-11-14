import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ComingSoonComp = () => {
  return (
    <>
    <ComingSoon/>
    </>
  )
};

export default ComingSoonComp;

const ComingSoon = () => {
  const [countdown, setCountDown] = useState(60); //Countdown timer (in seconds)

  useEffect(() => {
    if (countdown === 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [countdown]);

  // Format countdown in mm:ss
  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };
  return (
    <>
      <div className="coming-soon-container">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Coming Soon</h1>
          <p>We're working on something amazing!</p>
        </motion.div>

        <motion.div
          className="countdown"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h2>Launch in:</h2>
          <div className="countdown-timer">
            <span>{formatCountdown()}</span>
          </div>
        </motion.div>

        <motion.div
          className="stay-tuned"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <p>Stay tuned for more updates!</p>
        </motion.div>
      </div>
    </>
  );
};
