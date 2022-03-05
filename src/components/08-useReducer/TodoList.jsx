import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="divide-y divide-gray-300 list-decimal">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
