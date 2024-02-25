import styles from './Clock.module.css';
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    const timer = setInterval(() => {
      setTime({
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <section className={styles.wrapper}>
      <p>{time.hours}</p>
      <p>:</p>
      <p>{time.minutes}</p>
      <p>:</p>
      <p>{time.seconds}</p>
    </section>
  );
};

export default Clock;
