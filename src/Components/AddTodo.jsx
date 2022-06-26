import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI } from "../Store/Todos/todos.action";
import TodoList from "./TodoList";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    let todo = {
      value: value,
      status: false,
    };
    addTodoAPI(todo, dispatch);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <TodoList value={value}></TodoList>
    </div>
  );
};

export default AddTodo;
