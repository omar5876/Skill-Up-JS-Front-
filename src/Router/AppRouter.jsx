import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WalletRouter from "./WalletRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoutes from "./PublicRoutes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminRouter from "./AdminRouter";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Routes>
      <Route
        exact
        index
        element={
          <PublicRoutes isAuth={isAuth}>
            <Login />
          </PublicRoutes>
        }
      ></Route>
      <Route
        exact
        path="register"
        element={
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        }
      ></Route>
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
