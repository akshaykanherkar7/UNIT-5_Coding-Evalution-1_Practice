import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

const token = localStorage.getItem("token");
const initialState = {
  isAuth: !!token,
  loading: false,
  error: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case LOGIN_SUCCESS: {
      console.log(payload);
      localStorage.setItem("token", payload);
      return { ...state, isAuth: true, loading: false, error: false };
    }

    case LOGIN_FAILED: {
      return { ...state, loading: false, error: true };
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false };
    }

    default: {
      return state;
    }
  }
};
