import React, { useState, useEffect } from 'react'

const CountDownTimerApp = () => {
    // Set your target date and time
    const targetDate = new Date('2022-12-31T23:59:59').getTime();
    return (
        <>
            <CountdownTimer targetDate={targetDate} />
        </>
    )
}

export default CountDownTimerApp

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <div>
                <span>{timeLeft.days} days</span>
                <span>{timeLeft.hours} hours</span>
                <span>{timeLeft.minutes} minutes</span>
                <span>{timeLeft.seconds} seconds</span>
            </div>
        </div>
    );
};
