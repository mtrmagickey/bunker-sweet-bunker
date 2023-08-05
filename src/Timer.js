import React, { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div>
      Time left: {timeLeft} seconds
    </div>
  );
};

export default Timer;
