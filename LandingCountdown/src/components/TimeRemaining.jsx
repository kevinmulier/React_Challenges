const TimeRemaining = ({ value, unit }) => {
  return (
    <div className="flex flex-col items-center justify-center max-sm:text-[0.75rem] max-md:text-[1rem] text-[1.5rem]">
      <span className="font-mono font-bold text-[4em] leading-[0.75]">
        {value}
      </span>
      <span className="text-[1em]">{unit}</span>
    </div>
  );
};

export default TimeRemaining;
