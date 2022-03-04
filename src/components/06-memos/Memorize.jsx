import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { SmallCounter } from "./SmallCounter";

export const Memorize = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">
        Counter: <SmallCounter value={counter} />
      </h1>

      <hr className="my-4" />
      <button
        onClick={increment}
        className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4"
      >
        Increment
      </button>

      <button
        onClick={() => setShow(!show)}
        className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4 ml-2"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
