import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, hadleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description.trim(),
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <>
      <h1 className="text-xl text-blue-700">Add Todo</h1>
      <hr className="my-4" />

      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            name="description"
            className="w-full border-2 border-violet-300 px-2 py-1 rounded-lg"
            placeholder="Aprender..."
            autoComplete="off"
            value={description}
            onChange={hadleInputChange}
          />
        </div>
        <button
          type="submit"
          className="px-8 py-1 my-2 text-sm rounded-lg bg-violet-500 text-white mt-4"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};
