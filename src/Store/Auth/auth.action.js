import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

export const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginFailed = () => {
  return { type: LOGIN_FAILED };
};

export const logoutAPI = () => {
  return { type: LOGOUT };
};
