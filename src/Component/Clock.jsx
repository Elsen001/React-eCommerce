import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(3 * 24 * 60 * 60); // 3 günün saniye cinsinden karşılığı

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  return (
    <div className='time'>
      <h3>Shipping deadline</h3>
      <span>{formatTime(remainingTime)}</span>
    </div>
  );
};

export default Countdown;
