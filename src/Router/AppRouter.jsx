import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WalletRouter from "./WalletRouter";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminRouter from "./AdminRouter";

function AppRouter() {
  return (
    <Routes>
      <Route exact index element={<Login />}></Route>
      <Route exact path="register" element={<Register />}></Route>
      <Route
        path="admin/*"
        element={
          <PrivateRoute isAdminRoute>
            <AdminRouter />
          </PrivateRoute>
        }
      />
      <Route
        path="wallet/*"
        element={
          <PrivateRoute>
            <WalletRouter />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<div>Pagina no encontrada </div>} />
    </Routes>
  );
}

export default AppRouter;
