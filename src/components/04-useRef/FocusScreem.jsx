import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Focus Screen</h1>
      <hr className="my-4" />

      <input
        ref={inputRef}
        type="text"
        name="name"
        className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg"
        placeholder="Tu nombre"
        autoComplete="off"
      />

      <button
        onClick={handleClick}
        className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-2"
      >
        Focus
      </button>
    </div>
  );
};
