import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../Store/Auth/auth.action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAPI());
  };
  return (
    <div>
      <button onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
