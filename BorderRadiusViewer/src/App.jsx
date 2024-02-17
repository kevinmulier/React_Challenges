import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const handleRadiusChange = (corner, value) => {
    setRadius((v) => {
      return { ...v, [corner]: value };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl gap-4 p-5 mx-auto">
      <h1 className="text-3xl font-thin">Border Radius Viewer</h1>
      <div className="flex justify-center w-full gap-2 mx-auto h-fit">
        <div className="flex flex-col items-center justify-between w-fit">
          <input
            type="number"
            className="text-center input input-bordered input-xs max-w-16"
            onChange={(e) => handleRadiusChange('topLeft', e.target.value)}
          />
          <input
            type="number"
            className="text-center input input-bordered input-xs max-w-16"
          />
        </div>
        <div className="w-6/12 h-60 bg-slate-500"></div>
        <div className="flex flex-col items-center justify-between w-fit">
          <input
            type="number"
            className="text-center input input-bordered input-xs max-w-16"
          />
          <input
            type="number"
            className="text-center input input-bordered input-xs max-w-16"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
