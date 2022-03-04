import { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Memo Hook</h1>
      <h1 className="text-xl text-blue-700">Counter: {counter}</h1>

      <hr className="my-4" />

      <div className="mb-4">
        <p>{memoProcesoPesado}</p>
      </div>

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
