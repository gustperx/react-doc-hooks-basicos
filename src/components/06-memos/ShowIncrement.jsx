import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a generar :(");

  return (
    <button
      onClick={increment}
      className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4"
    >
      Increment
    </button>
  );
});
