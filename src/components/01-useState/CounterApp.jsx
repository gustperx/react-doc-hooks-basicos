import { useState } from "react";

export const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  const handleCounter1 = () => {
    const increment = counter1 + 1;

    setCounter({ counter1: increment, counter2 });
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="my-4">Counter1 {counter1}</h1>
      <h1 className="my-4">Counter2 {counter2}</h1>
      <hr />

      <button
        className="px-8 py-1 my-2 rounded-lg bg-blue-500 text-white"
        onClick={handleCounter1}
      >
        +1
      </button>
    </div>
  );
};
