import { useState, type ChangeEvent } from "react";

const HomePage = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState<number | string>("");
  const handleChangeFirstValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(e.target.value);
  };

  const handleChangeSecondValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondValue(e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const handleSubtract = () => {
    setResult(Number(firstValue) - Number(secondValue));
  };
  const handleMultiply = () => {
    setResult(Number(firstValue) * Number(secondValue));
  };
  const handleDivide = () => {
    setResult(Number(firstValue) / Number(secondValue));
  };
  return (
    <div className="flex flex-col gap-4 items-center border border-gray-300 shadow-md p-4 rounded-md">
      <div>
        <h2 className="text-4xl font-bold">Calculator</h2>
      </div>
      <div className="flex gap-2">
        <input
          name="first"
          value={firstValue}
          onChange={handleChangeFirstValue}
          className="border border-neutral-200 rounded-md p-2"
        />
        <input
          name="second"
          value={secondValue}
          onChange={handleChangeSecondValue}
          className="border border-neutral-200 rounded-md p-2"
        />
      </div>
      <div className="flex gap-2">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default HomePage;
