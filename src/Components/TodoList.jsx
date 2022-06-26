import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosAPI,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../Store/Todos/todos.action";

const TodoList = ({ value }) => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todo);
  console.log("todos:", todos);

  useEffect(() => {
    getTodosAPI(dispatch);
  }, [dispatch]);

  const removeTodoHandler = (id) => {
    removeTodo(id, dispatch);
  };

  const toggleTodoHandler = (todo) => {
    toggleTodo(todo, dispatch);
  };

  const handleUpdateTodo = (id, value) => {
    updateTodo(id, value, dispatch);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div
              style={
                todo.status
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.value}
            </div>
            <button onClick={() => removeTodoHandler(todo.id)}>Remove</button>
            <button onClick={() => toggleTodoHandler(todo)}>Toggle</button>
            <button onClick={() => handleUpdateTodo(todo.id,value)}>
              Update Todo
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
