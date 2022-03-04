import { useEffect, useState } from "react";

import { Messages } from "./Messages";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey!!");
  }, []);

  useEffect(() => {
    // console.log("formState cambio!!");
  }, [formState]);

  const hadleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">useEffect</h1>
      <hr className="my-4" />

      <form action="">
        <div>
          <input
            type="text"
            name="name"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg my-2"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={hadleInputChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg my-2"
            placeholder="Tu email"
            autoComplete="off"
            value={email}
            onChange={hadleInputChange}
          />
        </div>

        {name === "123" && <Messages />}
      </form>
    </div>
  );
};
