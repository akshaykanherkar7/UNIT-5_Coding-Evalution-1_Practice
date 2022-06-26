import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
