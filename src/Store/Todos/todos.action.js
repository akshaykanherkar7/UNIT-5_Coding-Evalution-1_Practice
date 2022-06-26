import {
  ADDTODO_FAILURE,
  ADDTODO_LOADING,
  ADDTODO_SUCCESS,
  GETTODO_FAILURE,
  GETTODO_LOADING,
  GETTODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./todos.actionTypes";
import axios from "axios";

export const addTodoAPI = (data, dispatch) => {
  dispatch({ type: ADDTODO_LOADING });
  axios
    .post("http://localhost:8080/todos", data)
    .then((res) => {
      dispatch({ type: ADDTODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ADDTODO_FAILURE });
    });
};

export const getTodosAPI = (dispatch) => {
  dispatch({ type: GETTODO_LOADING });
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: GETTODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GETTODO_FAILURE });
    });
};

export const removeTodo = (id, dispatch) => {
  axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  });
};

export const toggleTodo = (todo, dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${todo.id}`, {
      status: !todo.status,
    })
    .then((res) => {
      dispatch({ type: TOGGLE_TODO, payload: todo });
    });
};

export const updateTodo = (id, value, dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${id}`, { value: value })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: UPDATE_TODO, payload: res.data });
    });
};
