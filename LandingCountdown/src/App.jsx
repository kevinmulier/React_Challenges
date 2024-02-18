import { useState } from 'react';

function App() {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  return (
    <div className="container flex flex-col items-center justify-center px-10 py-20 mx-auto gap-28">
      <p className="text-4xl font-bold text-center">Until new beginnings</p>
      <section className="flex justify-around gap-5">
        <div className="flex flex-col items-center justify-center">
          <span className="font-mono font-bold text-[8rem] leading-[0.75]">
            2
          </span>
          <span className="text-xl">months</span>
        </div>
      </section>
    </div>
  );
}

export default App;
