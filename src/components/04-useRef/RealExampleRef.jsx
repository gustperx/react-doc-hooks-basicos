import { useState, useRef } from "react";
import { MultipleCustomHooks } from "../03-exmaples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Real Example Ref</h1>
      <hr className="my-4" />

      {show && <MultipleCustomHooks />}

      <button
        onClick={() => setShow(!show)}
        className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4"
      >
        Show / Hide
      </button>
    </div>
  );
};
