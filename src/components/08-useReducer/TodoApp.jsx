import { useReducer, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("TODOS")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Todo App ({todos.length})</h1>
      <hr className="my-4" />

      <div className="flex flex-col lg:flex-row">
        <div className="basis-4/12 lg:mr-4">
          <TodoAdd handleAdd={handleAdd} />
        </div>

        <div className="basis-8/12">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
