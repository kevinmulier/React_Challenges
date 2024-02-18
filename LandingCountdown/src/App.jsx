import { useState } from 'react';
import TimeRemaining from './components/TimeRemaining';

function App() {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  return (
    <div className="container flex flex-col items-center justify-center px-1 py-20 mx-auto gap-28">
      <p className="text-4xl font-bold text-center max-sm:text-2xl">
        Revealing the future in
      </p>
      <section className="flex w-full max-w-3xl justify-evenly">
        <TimeRemaining
          value={countdown.months}
          unit={'months'}
        />
        <TimeRemaining
          value={countdown.days}
          unit={'days'}
        />
        <TimeRemaining
          value={countdown.hours}
          unit={'hours'}
        />
        <TimeRemaining
          value={countdown.minutes}
          unit={'minutes'}
        />
        <TimeRemaining
          value={countdown.seconds}
          unit={'seconds'}
        />
      </section>
    </div>
  );
}

export default App;
