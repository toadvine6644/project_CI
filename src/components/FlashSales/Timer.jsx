import React, { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-21") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <span>{timeLeft.days || "0"} Days</span> :
      <span>{timeLeft.hours || "0"} Hours</span> :
      <span>{timeLeft.minutes || "0"} Minutes</span> :
      <span>{timeLeft.seconds || "0"} Seconds</span>
    </div>
  );
};

export default Timer;
