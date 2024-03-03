import { useState, useEffect } from 'react';
import Digit from './components/Digit/Digit';
import './App.css';

function App() {
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
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <section className="ClockWrapper">
      {time.hours.split('').map((hour) => (
        <Digit number={hour} />
      ))}
      <p className="separator"> : </p>
      {time.minutes.split('').map((minute) => (
        <Digit number={minute} />
      ))}
      <p className="separator"> : </p>
      {time.seconds.split('').map((second) => (
        <Digit number={second} />
      ))}
    </section>
  );
}

export default App;
