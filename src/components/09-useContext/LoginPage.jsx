import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const user = {
    id: 123,
    name: "gust",
    email: "email@gmail.com",
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">LoginPage</h1>
      <hr className="my-4" />

      <div className="flex flex-col lg:flex-row">
        <button
          type="button"
          className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4"
          onClick={() => setUser(user)}
        >
          Set Login
        </button>
      </div>
    </div>
  );
};
