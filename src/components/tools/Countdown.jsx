import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Countdown = ({ initialMinutes = 1 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Convert minutes to seconds
  const [isActive, setIsActive] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startCountdown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    setIsActive(false);
    setTimeLeft(initialMinutes * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="countDown">
      <h2>Discount Countdown</h2>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>
        {formatTime(timeLeft)}
      </div>
      {auth.isAdmin && (
        <div>
          <button onClick={startCountdown} disabled={isActive}>
            Start
          </button>
          <button onClick={resetCountdown}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Countdown;
