import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CountDownTimerComp = () => {
  return (
    <>
      <CountdownTimer/>
    </>
  );
}

export default CountDownTimerComp;

// Countdown Timer Component
const CountdownTimer = () => {
    // Set initial target time (for example: 5 minutes from now)
    const [timeLeft, setTimeLeft] = useState(300); // Time in seconds (300s = 5 minutes)
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
  
    // Start the countdown when the user presses the "Start" button
    const handleStart = () => {
      setIsRunning(true);
      setIsFinished(false);
    };
  
    // Countdown effect
    useEffect(() => {
      let interval;
      if (isRunning && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000); // Decrease every second
      }
  
      if (timeLeft === 0) {
        setIsRunning(false);
        setIsFinished(true);
      }
  
      // Cleanup interval when component is unmounted or when countdown ends
      return () => clearInterval(interval);
    }, [isRunning, timeLeft]);
  
    // Calculate hours, minutes, and seconds
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return { hours, minutes, seconds };
    };
  
    const { hours, minutes, seconds } = formatTime(timeLeft);
  
    return (
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TimerDisplay>
            <TimeUnit>
              <h2>{hours}</h2>
              <span>Hours</span>
            </TimeUnit>
            <TimeUnit>
              <h2>{minutes}</h2>
              <span>Minutes</span>
            </TimeUnit>
            <TimeUnit>
              <h2>{seconds}</h2>
              <span>Seconds</span>
            </TimeUnit>
          </TimerDisplay>
  
          <motion.button
            onClick={handleStart}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isRunning ? 'Running...' : 'Start Countdown'}
          </motion.button>
  
          {isFinished && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FinishMessage>Time's up!</FinishMessage>
            </motion.div>
          )}
        </motion.div>
      </Container>
    );
  };
  
  // Styled Components
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f6f9;
    text-align: center;
  `;
  
  const TimerDisplay = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `;
  
  const TimeUnit = styled.div`
    margin: 0 15px;
    font-size: 3rem;
    color: #333;
  
    h2 {
      margin: 0;
    }
  
    span {
      display: block;
      font-size: 1rem;
      color: #555;
    }
  `;
  
  const FinishMessage = styled.div`
    margin-top: 20px;
    font-size: 1.5rem;
    color: #e74c3c;
    font-weight: bold;
  `;
