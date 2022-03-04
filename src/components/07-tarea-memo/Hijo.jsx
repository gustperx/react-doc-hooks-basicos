import { memo } from "react";

export const Hijo = memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-2 mr-2"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
