import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [setCounter]);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Counter: {counter}</h1>

      <hr className="my-4" />

      <ShowIncrement increment={increment} />
    </div>
  );
};
