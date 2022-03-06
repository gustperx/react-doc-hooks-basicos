import { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">HomePage</h1>
      <hr className="my-4" />

      <div className="flex flex-col lg:flex-row">
        <div className="basis-4/12 lg:mr-4"></div>

        <div className="basis-8/12">
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
};
