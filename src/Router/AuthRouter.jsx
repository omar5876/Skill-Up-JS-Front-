import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AuthRouter = () => {

  // Aca mostramos solo el login y el register, hasta que el usuario se autentique

  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="*" element={<Login to="login" />} />
    </Routes>
  );
};

export default AuthRouter;
