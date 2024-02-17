import { useState } from 'react';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(null);
  const [notification, setNotification] = useState('');

  const handleConvert = () => {
    const isValidBinary = /^1[01]*$/.test(binary);

    if (!isValidBinary) {
      setNotification('Binary input should contain only 1s and 0s');
      setDecimal(null);

      setTimeout(() => {
        setNotification('');
      }, 5000);
      return;
    }

    setDecimal(parseInt(binary, 2));
  };

  return (
    <div className="container flex flex-col max-w-2xl gap-4 p-5 mx-auto">
      <h1 className="text-2xl font-bold text-center">Bin2Dec Converter</h1>
      {notification && <p className="alert alert-error">{notification}</p>}
      <section className="flex flex-col items-center justify-center gap-3 mx-auto w-fit">
        <div className="flex flex-col justify-center w-full gap-1">
          <p className="text-center">Binary input</p>
          <input
            type="text"
            className="min-w-full input input-bordered"
            value={binary}
            onChange={(e) => setBinary(e.target.value)}
          />
        </div>
        <button
          className="btn btn-outline w-fit"
          onClick={handleConvert}>
          Convert
        </button>
        <div className="flex flex-col justify-center w-full gap-1">
          <h2 className="text-center">Converted decimal value</h2>
          <p className="min-w-full p-2 text-center border rounded-lg border-base-content border-opacity-20 min-h-10">
            {decimal}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
