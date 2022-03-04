import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(50);

  return (
    <div className="container m-auto p-4">
      <h1>Counter With Hook {state}</h1>
      <hr />
      <button
        onClick={() => increment(2)}
        className="px-8 py-1 my-2 rounded-lg bg-blue-500 text-white"
      >
        +2
      </button>
      <button
        onClick={reset}
        className="px-8 py-1 my-2 rounded-lg bg-gray-500 text-white ml-2"
      >
        Reset
      </button>
      <button
        onClick={() => decrement(2)}
        className="px-8 py-1 my-2 rounded-lg bg-violet-500 text-white ml-2"
      >
        -2
      </button>
    </div>
  );
};
