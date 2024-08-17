import React, { useState, useRef, useEffect } from "react";
import "../CSS/Timer.css";
import FlashSales from "../FlashSales/FlashSales";

function Timer() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00   :   00   :   00   :   00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 24 / 60 / 60) % 30);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (days > 9 ? days : "0" + days) +
          " " +
          ":" +
          " " +
          (hours > 9 ? hours : "0" + hours) +
          " " +
          ":" +
          " " +
          (minutes > 9 ? minutes : "0" + minutes) +
          " " +
          ":" +
          " " +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("21:23:07:56");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 100000);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="saleTime">
      <div className="whatsNew">
        <div className="redBar"></div>
        <h5 className="newsContext">Today's</h5>
      </div>
      <div className="timerInfo">Days Hours Minutes Seconds</div>
      <h1 className="timer">
        Flash Sales: <div className="clock">{timer}</div>
      </h1>
      <FlashSales />
    </div>
  );
}

export default Timer;
