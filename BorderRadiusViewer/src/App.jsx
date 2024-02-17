import { useEffect, useState } from 'react';
import RadiusInput from './components/RadiusInput';

function App() {
  const [radius, setRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });
  const [boxRadiusStyle, setBoxRadiusStyle] = useState('');

  useEffect(() => {
    if (Object.values(radius).some((element) => element !== 0)) {
      setBoxRadiusStyle(
        `border-radius: ${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
      );
    } else {
      setBoxRadiusStyle(``);
    }
  }, [radius]);

  const handleRadiusChange = (corner, value) => {
    setRadius((v) => {
      return { ...v, [corner]: value };
    });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(`${boxRadiusStyle};`);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl gap-8 p-5 mx-auto">
      <h1 className="text-3xl font-thin">Border Radius Viewer</h1>
      <div className="flex justify-center w-full gap-2 mx-auto h-fit">
        <div className="flex flex-col items-center justify-between w-fit">
          <RadiusInput
            onChange={(e) =>
              handleRadiusChange('topLeft', Number(e.target.value))
            }
          />
          <RadiusInput
            onChange={(e) =>
              handleRadiusChange('bottomLeft', Number(e.target.value))
            }
          />
        </div>
        <div
          className="w-6/12 aspect-square bg-neutral"
          style={{
            borderRadius: `${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
          }}></div>
        <div className="flex flex-col items-center justify-between w-fit">
          <RadiusInput
            onChange={(e) =>
              handleRadiusChange('topRight', Number(e.target.value))
            }
          />
          <RadiusInput
            onChange={(e) =>
              handleRadiusChange('bottomRight', Number(e.target.value))
            }
          />
        </div>
      </div>
      {boxRadiusStyle && (
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-lg font-semibold">CSS code</h2>
          <div className="relative flex flex-col p-5 pb-10 w-fit rounded-box bg-base-300">
            <p className="text-xs italic whitespace-pre-line">
              {`border-radius: ${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%;`}
            </p>
            <button
              className="absolute bottom-2 right-2 btn btn-xs"
              onClick={copyCode}>
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
