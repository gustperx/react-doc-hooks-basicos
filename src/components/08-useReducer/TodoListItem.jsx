export const TodoListItem = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div className="flex justify-between items-center w-full" key={todo.id}>
      <li>
        <p
          className={`${todo.done && "line-through"} cursor-pointer`}
          onClick={() => handleToggle(todo.id)}
        >
          {todo.desc}
        </p>
      </li>
      <button
        onClick={() => handleDelete(todo.id)}
        className="px-8 py-1 my-2 text-sm rounded-lg bg-red-500 text-white mt-4"
      >
        Delete
      </button>
    </div>
  );
};
