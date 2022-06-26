import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailed,
  loginLoading,
  loginSuccess,
} from "../Store/Auth/auth.action";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const { isAuth, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (isAuth) {
    navigate("/");
  }

  const creds = {
    email: email,
    password: password,
  };
  const handleLogin = () => {
    dispatch(loginLoading());
    axios
      .post("https://reqres.in/api/login", creds)
      .then((res) => {
        setTimeout(() => {
          dispatch(loginSuccess(res.data.token));
        }, 2000);
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div>
      <input
        type="text"
        placeholder="eve.holt@reqres.in"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="cityslicka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
