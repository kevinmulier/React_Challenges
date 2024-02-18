import { useEffect, useState } from 'react';
import TimeRemaining from './components/TimeRemaining';

function App() {
  const newYears = '21 Sep 2024';
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();

      const totalSeconds = (newYearsDate - currentDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
      const months = Math.floor(days / 30);

      setCountdown({ months, days: days % 30, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="container flex flex-col items-center justify-center px-1 py-20 mx-auto text-white gap-28">
      <p className="text-4xl font-bold text-center max-[500px]:text-2xl">
        Revealing the future in
      </p>
      <section className="flex w-full max-w-3xl justify-evenly">
        {Object.keys(countdown).map((key) => {
          return countdown[key] > 0 ? (
            <TimeRemaining
              key={key}
              value={formatTime(countdown[key])}
              unit={key}
            />
          ) : null;
        })}
      </section>
    </div>
  );
}

export default App;
