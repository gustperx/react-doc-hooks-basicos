import { useEffect, useState } from "react";

export const Messages = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = state;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setState(coords);
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Component desmontado");
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Eres Genial !</h1>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
