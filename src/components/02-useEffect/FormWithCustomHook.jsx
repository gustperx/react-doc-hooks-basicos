import { useEffect } from "react";
import { userForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const { values, hadleInputChange } = userForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">FormWithCustomHook</h1>
      <hr className="my-4" />

      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            type="text"
            name="name"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={hadleInputChange}
          />
        </div>

        <div className="my-2">
          <input
            type="email"
            name="email"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg"
            placeholder="Tu email"
            autoComplete="off"
            value={email}
            onChange={hadleInputChange}
          />
        </div>

        <div className="my-2">
          <input
            type="password"
            name="password"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg"
            placeholder="*******"
            value={password}
            onChange={hadleInputChange}
          />
        </div>

        <button
          type="submit"
          className="px-8 py-1 my-2 rounded-lg bg-blue-500 text-white"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
