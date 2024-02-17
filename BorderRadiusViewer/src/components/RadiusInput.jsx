/* eslint-disable react/prop-types */
const RadiusInput = ({ onChange }) => {
  return (
    <input
      type="number"
      className="text-center input input-bordered input-xs max-w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      onChange={onChange}
    />
  );
};

export default RadiusInput;
