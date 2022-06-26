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

const initialState = {
  todos: [],
  loading: false,
  error: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTODO_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case ADDTODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
        error: false,
      };
    }

    case ADDTODO_FAILURE: {
      return { ...state, loading: false, error: true };
    }

    case GETTODO_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case GETTODO_SUCCESS: {
      return { ...state, todos: payload, loading: false, error: false };
    }

    case GETTODO_FAILURE: {
      return { ...state, loading: false, error: true };
    }

    case REMOVE_TODO: {
      let newTodo = state.todos.filter((todo) => todo.id !== payload);
      return { ...state, todos: [...newTodo] };
    }

    case TOGGLE_TODO: {
      let newTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          el.status = !el.status;
        }
        return el;
      });
      return { ...state, todos: newTodo };
    }

    case UPDATE_TODO: {
      let newTodo = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.value = payload.value;
        }
        return todo;
      });
      return { ...state, todos: newTodo };
    }

    default: {
      return state;
    }
  }
};
